import React from 'react';

const iconLibrary = {
  arrowLeft: [
    'M18 11L8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707 12.707 17.293 8.414 13 18 13z"'
  ],
  dockLeft: [
    'M4 21h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm6-16h9v14h-9V5zM5 5h3v14H5V5z'
  ],
  downArrow: [
    'M19 6H5a1.001 1.001 0 0 0-.844 1.538l7 11a1.003 1.003 0 0 0 1.688-.001l7-11c.196-.308.208-.698.033-1.019A1.002 1.002 0 0 0 19 6zm-7 10.137L6.821 8h10.357L12 16.137z'
  ],
  xCircle: [
    'M14.793 7.793L12 10.586 9.207 7.793 7.793 9.207 10.586 12 7.793 14.793 9.207 16.207 12 13.414 14.793 16.207 16.207 14.793 13.414 12 16.207 9.207z"/><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z'
  ]
};

const Icon = ({ type, size, color, styleName }) => {
  if (!iconLibrary[type]) {
    return null;
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : 24}
        height={size ? size : 24}
        viewBox="0 0 24 24"
        className={styleName}
      >
        {iconLibrary[type].map((path, index) => (
          <path fill={color} key={index} color={color} d={path} />
        ))}
      </svg>
    );
  }
};

export default Icon;
