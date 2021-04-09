import URI from 'urijs'
import snakeCaseKeysObjectsOnly from 'utils/snakeCaseKeysObjectsOnly'

const searchURI = (route, opts) => new URI(route).search(snakeCaseKeysObjectsOnly(opts))

export default searchURI
