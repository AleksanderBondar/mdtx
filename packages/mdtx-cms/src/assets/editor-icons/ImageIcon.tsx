export const ImageIcon: React.FC<{ color?: string }> = ({
  color = '#E1E5EE',
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7333 18H5.49455C4.95605 18 4.6868 18 4.56212 17.8935C4.45394 17.8011 4.39653 17.6625 4.40769 17.5207C4.42055 17.3572 4.61094 17.1668 4.99172 16.7861L12.5499 9.22788C12.9019 8.87587 13.0779 8.69986 13.2809 8.63392C13.4594 8.57591 13.6517 8.57591 13.8302 8.63392C14.0332 8.69986 14.2092 8.87587 14.5612 9.22788L18 12.6667V13.7333M13.7333 18C15.2268 18 15.9735 18 16.544 17.7094C17.0457 17.4537 17.4537 17.0457 17.7094 16.544C18 15.9735 18 15.2268 18 13.7333M13.7333 18H6.26667C4.77319 18 4.02646 18 3.45603 17.7094C2.95426 17.4537 2.54631 17.0457 2.29065 16.544C2 15.9735 2 15.2268 2 13.7333V6.26667C2 4.77319 2 4.02646 2.29065 3.45603C2.54631 2.95426 2.95426 2.54631 3.45603 2.29065C4.02646 2 4.77319 2 6.26667 2H13.7333C15.2268 2 15.9735 2 16.544 2.29065C17.0457 2.54631 17.4537 2.95426 17.7094 3.45603C18 4.02646 18 4.77319 18 6.26667V13.7333M8.66667 6.88889C8.66667 7.87073 7.87073 8.66667 6.88889 8.66667C5.90705 8.66667 5.11111 7.87073 5.11111 6.88889C5.11111 5.90705 5.90705 5.11111 6.88889 5.11111C7.87073 5.11111 8.66667 5.90705 8.66667 6.88889Z"
        stroke={color ? color : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
