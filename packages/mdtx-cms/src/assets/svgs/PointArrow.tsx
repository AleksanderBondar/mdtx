import React from 'react';

export const PointArrow: React.FC<{ color?: string }> = ({
  color = '#FF9800',
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3535 12.3537L12.3535 18.3537C12.2592 18.4448 12.1329 18.4952 12.0018 18.494C11.8707 18.4929 11.7453 18.4403 11.6526 18.3476C11.5599 18.2549 11.5073 18.1295 11.5062 17.9984C11.505 17.8673 11.5554 17.741 11.6465 17.6467L16.793 12.5002H6C5.86739 12.5002 5.74021 12.4475 5.64645 12.3537C5.55268 12.26 5.5 12.1328 5.5 12.0002C5.5 11.8676 5.55268 11.7404 5.64645 11.6466C5.74021 11.5529 5.86739 11.5002 6 11.5002H16.793L11.6465 6.3537C11.5554 6.2594 11.505 6.1331 11.5061 6.002C11.5073 5.8709 11.5599 5.7455 11.6526 5.65279C11.7453 5.56009 11.8707 5.50751 12.0018 5.50637C12.1329 5.50523 12.2592 5.55562 12.3535 5.6467L18.3535 11.6467C18.3999 11.6931 18.4368 11.7482 18.4619 11.8089C18.487 11.8695 18.5 11.9345 18.5 12.0002C18.5 12.0658 18.487 12.1309 18.4619 12.1915C18.4368 12.2522 18.4 12.3073 18.3535 12.3537V12.3537Z"
        fill={color}
      />
    </svg>
  );
};
