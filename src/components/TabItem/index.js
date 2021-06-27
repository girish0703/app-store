// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails
  const btnClassName = isActive ? 'tab-button active' : 'tab-button'
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTabItem} className={btnClassName}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
