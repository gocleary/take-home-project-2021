import { createSlice } from '@reduxjs/toolkit'
import normalize from 'json-api-normalizer'
import camelCase from 'lodash/camelCase'

const addRelationship = (state, entityId, entityType, relationshipToAdd, relationshipName) => {
  const entity = state[entityType]?.[entityId]

  if (!entity) return

  if (!relationshipName) {
    relationshipName = relationshipToAdd.type
  }

  if (!entity.relationships) {
    entity.relationships = {}
  }

  if (entity.relationships[relationshipName]?.data && entity.relationships[relationshipName].data instanceof Array) {
    if (!_.some(entity.relationships[relationshipName].data, relationshipToAdd)) {
      entity.relationships[relationshipName].data.push(relationshipToAdd)
    }
  } else {
    const relationshipToMerge = {}

    relationshipToMerge[relationshipName] = {
      data: [relationshipToAdd],
    }

    _.merge(entity.relationships, relationshipToMerge)
  }
}

const removeRelationship = (relatedDataLink, state, entity, entityType) => {
  if (!relatedDataLink) return

  // relatedDataLink is an object that looks like: {id: "1", type: "user"}
  const { type, id } = relatedDataLink
  const relatedEntity = state[type]?.[id]
  const relatedEntityRelationships = relatedEntity?.relationships

  _.each(relatedEntityRelationships, (value, key) => {
    const { data } = value

    if (!data) return

    if (data instanceof Array) {
      // if it's an array of data then remove it from the list if it exists
      relatedEntity.relationships[key].data = _.reject(data, d => d.type === entityType && d.id === entity.id)
    } else {
      if (data.type === entityType && data.id === entity.id) {
        delete relatedEntity.relationships[key]
      }
    }
  })
}

const entityRecordFromResponse = data => ((data.data instanceof Array) ? data.data[0] : data.data)
const initialState = {}

const entitySlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    resetAll(state, _) {
      return initialState
    },

    reset(state, action) {
      state[action.payload] = {}
    },

    // `add` accepts an object or array of entities and adds them to existing state
    // `action.payload` should have the format of { data: response, reverseRelationships: [] }
    // `reverseRelationships` is optional.
    // It has the format of:
    // [{ entityId: '27', entityType: 'cornerback', relationshipName: 'buffalobills' }]
    add(state, action) {
      const { data, reverseRelationships } = action.payload
      const normalizedEntities = normalize(data)

      _.merge(state, normalizedEntities)

      // Loop over any reverse relationships that should be created denoted by `reverseRelationships`.
      // These can have custom names such as article.creator
      if (reverseRelationships) {
        _.each(reverseRelationships, (relationship) => {
          if (data.data instanceof Array) {
            data.data.forEach(datum => addRelationship(
              state,
              relationship.entityId,
              relationship.entityType,
              { id: datum.id, type: camelCase(datum.type) },
              relationship.relationshipName
            ))
          } else {
            const entityRecord = entityRecordFromResponse(data)
            addRelationship(
              state,
              relationship.entityId,
              relationship.entityType,
              { id: entityRecord.id, type: camelCase(entityRecord.type) },
              relationship.relationshipName
            )
          }
        })
      }
    },

    // `update` entity with a deep merge of properties
    // `action.payload` should have the format of { data: response }
    // regular merge does not properly merge arrays
    // lodash provides mergeWith method to address this
    update(state, action) {
      const normalizedEntities = normalize(action.payload.data)

      const customizer = (objValue, srcValue) => {
        if (_.isArray(objValue)) {
          return srcValue
        }
      }

      _.mergeWith(state, normalizedEntities, customizer)
    },

    // `remove` entity from the redux store and all associated relationships from every other entity
    // `action.payload` should have the format of { id: '55', type: 'edge' }
    remove(state, action) {
      const { id: entityId, type: entityType } = action.payload

      const entity = state[entityType]?.[entityId]

      if (entity) {
        // delete the entity from the global state
        delete state[entityType][entityId]

        // traverse this entity's relationships and remove relationships pointing to it.
        _.each(entity.relationships, (value, _) => {
          const { data } = value

          if (data instanceof Array) {
            data.forEach(datum => removeRelationship(datum, state, entity, entityType))
          } else {
            removeRelationship(data, state, entity, entityType)
          }
        })
      }
    },
  },
})

export default entitySlice
