type InfoButtonProps = {
  onClick?: () => void;
};
const InfoButton = ({ onClick }: InfoButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="text-page_icon"
      id="al__nav-action-button"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>DC3D5683-8082-4CA8-9AF1-CC44947F09E4</title>
        <g
          id="Stanbic/Kwara-Demo"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="My-account.Stanbic"
            transform="translate(-320.000000, -40.000000)"
          >
            <g id="Topbar" transform="translate(0.000000, 24.000000)">
              <g id="Group" transform="translate(262.000000, 6.000000)">
                <g
                  id="Action-Icon-2"
                  transform="translate(48.000000, 0.000000)"
                >
                  <g
                    id="Icon-Placeholder"
                    transform="translate(10.000000, 10.000000)"
                  >
                    <rect
                      id="Box-24pt"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <path
                      d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M11,11 L11,17 L13,17 L13,11 L11,11 Z M12,9 C12.5522847,9 13,8.55228475 13,8 C13,7.44771525 12.5522847,7 12,7 C11.4477153,7 11,7.44771525 11,8 C11,8.55228475 11.4477153,9 12,9 Z"
                      id="🎨-Icon-Style"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default InfoButton;
