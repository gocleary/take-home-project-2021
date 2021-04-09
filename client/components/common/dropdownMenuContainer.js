import React, { Component } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import KebabMenu from 'components/common/kebabMenu'

class DropdownMenuContainer extends Component {
  constructor(props) {
    super(props)

    this.dropdownToggleRef = React.createRef()
    this.dropdownContentRef = React.createRef()
  }

  state = {
    showMenuDropdown: false,
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  toggleMenuDropdown = (ev) => {
    ev.stopPropagation()
    if (this.state.showMenuDropdown) {
      this.closeDropdown()
    } else {
      this.openDropdown()
    }
  }

  closeDropdown = () => {
    document.removeEventListener('click', this.handleClickOutside)
    this.setState({ showMenuDropdown: false })
  }

  openDropdown = () => {
    document.addEventListener('click', this.handleClickOutside)
    this.setState({ showMenuDropdown: true })
  }

  handleClickOutside = (e) => {
    const currentDropdownContentRef = this.dropdownContentRef.current
    // hide menu when clicking outside the menu
    if (currentDropdownContentRef && !currentDropdownContentRef.contains(e.target) && this.state.showMenuDropdown) {
      this.closeDropdown()
    }
  }

  render() {
    const currentDropdownToggleRef = this.dropdownToggleRef.current
    const toggleHeight = (currentDropdownToggleRef && currentDropdownToggleRef.getBoundingClientRect().height) || 0
    const dropdownOffsetPx = this.props.dropdownOffsetPx || 8
    const dropdownOffsetHeight = `${toggleHeight + dropdownOffsetPx}px`
    const {
      className, toggleWrapperClassName = 'position-relative', id, style,
    } = this.props

    return (
      <div id={id} className={classNames('DropdownMenu-container', className)} style={style}>
        <div className={toggleWrapperClassName}>
          <div className='DropdownMenu-toggle' onClick={ev => this.toggleMenuDropdown(ev)} ref={this.dropdownToggleRef}>
            {this.props.toggleContent ? this.props.toggleContent : <KebabMenu lightColor={this.props.lightColorMenu} />}
          </div>

          {this.state.showMenuDropdown && (
            <div
              className='DropdownMenu-content'
              ref={this.dropdownContentRef}
              style={{ top: dropdownOffsetHeight, right: '-1px' }}
            >
              {this.props.navLinks
                ? this.props.navLinks.map(navLink => (
                  <NavLink
                    key={navLink.linkTo}
                    className='Navbar-dropdownMenuItem px-3 py-2'
                    exact
                    to={navLink.linkTo}
                    onClick={navLink.onClick || this.closeDropdown}
                  >
                    {navLink.title}
                  </NavLink>
                ))
                : this.props.children}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default DropdownMenuContainer
