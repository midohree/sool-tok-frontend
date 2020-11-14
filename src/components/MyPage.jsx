import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import FriendCell from './FriendCell';

function MyPage({ onLoad, onLogout, user }) {
  const [isRequestList, setRequestList] = useState(false);

  useEffect(() => {
    onLoad(user);
  }, []);

  return (
    <div style={{ backgroundColor: 'lightGray' }}>
      <div>
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <Button onClick={() => { onLogout(user); }} text='로그아웃' />
      </div>
      <div>
        {
          !isRequestList ?
            user.friendList?.length > 0 ?
              user.friendList.map(friend => {
                return (
                  <FriendCell
                    key={friend.id}
                    name={friend.name}
                    photoUrl={friend.photoUrl}
                    isOnline={friend.isOnline}
                  />
                );
              })
            :
              <div>친구를 추가해보세요..!</div>
          :
          <div>친구 요청 목록이 없습니다..</div>
        }
      </div>
      <Button
        onClick={() => { setRequestList(!isRequestList); }}
        text={isRequestList ? '친구 목록 보기' : '요청 목록 보기'}
      />
    </div>
  );
}

export default MyPage;

MyPage.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object,
  ]),
};
