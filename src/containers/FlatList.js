import React from 'react'
import PropTypes from 'prop-types'

class FlatList extends React.Component {
  constructor(props) {
    super(props)
    this.didScroll = this.didScroll.bind(this)
    this.state = {
      lastThreshold: null
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.didScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.didScroll)
  }

  didScroll() {
    const { onReachThreshold } = this.props
    const { lastThreshold } = this.state
    const wrappedElement = document.getElementById('flat-list')

    const scrollBottomPosition = wrappedElement.getBoundingClientRect().bottom
    const isInThreshold = scrollBottomPosition - 300 <= window.innerHeight
    const isScrollingUp = scrollBottomPosition < lastThreshold

    if (isInThreshold && !isScrollingUp) {
      this.setState({ lastThreshold: scrollBottomPosition })
      onReachThreshold(this.didScroll)
    }
  }

  render() {
    const { children } = this.props
    return <div id="flat-list">{children}</div>
  }
}

FlatList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onReachThreshold: PropTypes.func.isRequired
}

export default FlatList
