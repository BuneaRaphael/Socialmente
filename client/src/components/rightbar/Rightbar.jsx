import './rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>This Text</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
          
        </div>
        <div className="item">
            <span>Latest Activities</span>
            <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Jane Doe</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Jane Doe</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Jane Doe</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
            <div className="user">
              <div className="userinfo">
                <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='online'/>
                <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
              <div className="userinfo">
                <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='online'/>
                <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
              <div className="userinfo">
                <img src="https://images.pexels.com/photos/3613530/pexels-photo-3613530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='online'/>
                <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
