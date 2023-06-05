import './UserAvatar.css';

function UserAvatar() {
  return(
    <span className="user-avatar">
      <a onClick={event => window.open('https://developer.mozilla.org')}>SA</a>
    </span>
  )
}
export default UserAvatar;