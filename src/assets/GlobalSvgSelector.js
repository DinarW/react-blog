import React from "react";

const GlobalSvgSelector = ({ id, styles }) => {
  switch (id) {
    case "closeInput":
      return (
        <svg
          className={styles}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5678 0.258628L8.00083 6.82626L1.4339 0.258628C1.27596 0.114079 1.06834 0.0360483 0.854299 0.0407914C0.640258 0.0455344 0.436299 0.132686 0.284911 0.284089C0.133524 0.435493 0.0463822 0.639473 0.0416396 0.853537C0.036897 1.0676 0.114919 1.27524 0.259453 1.4332L6.82305 8.00083L0.257787 14.5668C0.177578 14.6432 0.11346 14.735 0.0692014 14.8365C0.0249425 14.9381 0.00143588 15.0475 6.37508e-05 15.1583C-0.00130838 15.2691 0.0194817 15.3791 0.0612114 15.4817C0.102941 15.5844 0.164768 15.6777 0.243059 15.7561C0.32135 15.8345 0.414524 15.8965 0.517105 15.9383C0.619685 15.9802 0.729602 16.0012 0.840394 16C0.951186 15.9987 1.06062 15.9754 1.16225 15.9313C1.26389 15.8871 1.35569 15.8231 1.43224 15.743L8.00083 9.17708L14.5678 15.7447C14.7257 15.8893 14.9333 15.9673 15.1474 15.9625C15.3614 15.9578 15.5654 15.8706 15.7168 15.7192C15.8681 15.5678 15.9553 15.3639 15.96 15.1498C15.9648 14.9357 15.8867 14.7281 15.7422 14.5701L9.17528 8.0025L15.7422 1.4332C15.8224 1.35676 15.8865 1.26504 15.9308 1.16346C15.9751 1.06187 15.9986 0.952464 15.9999 0.841662C16.0013 0.73086 15.9805 0.620902 15.9388 0.518251C15.8971 0.415601 15.8352 0.322328 15.7569 0.243918C15.6786 0.165508 15.5855 0.103542 15.4829 0.0616621C15.3803 0.0197825 15.2704 -0.00116522 15.1596 4.99992e-05C15.0488 0.00126522 14.9394 0.024619 14.8377 0.0687386C14.7361 0.112858 14.6443 0.176853 14.5678 0.256962V0.258628Z"
            fill="#D3D3D3"
          />
        </svg>
      );
    case "closeMenu":
      return (
        <svg
          className={styles}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.63599"
            y="0.221817"
            width="20"
            height="2"
            transform="rotate(45 1.63599 0.221817)"
            fill="white"
          />
          <rect
            x="15.5564"
            y="1.63603"
            width="20"
            height="2"
            transform="rotate(135 15.5564 1.63603)"
            fill="white"
          />
        </svg>
      );
    case "openMenu":
      return (
        <svg
          className={styles}
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="2" fill="white" />
          <rect y="7" width="20" height="2" fill="white" />
          <rect y="14" width="20" height="2" fill="white" />
        </svg>
      );
    case "profile":
      return (
        <svg
          className={styles}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.02295 0C8.09585 0 7.18957 0.277811 6.41871 0.798302C5.64786 1.31879 5.04705 2.05859 4.69226 2.92413C4.33748 3.78968 4.24465 4.7421 4.42552 5.66095C4.60639 6.57981 5.05283 7.42384 5.70839 8.0863C6.36395 8.74875 7.19918 9.1999 8.10846 9.38267C9.01775 9.56544 9.96025 9.47163 10.8168 9.11311C11.6733 8.75459 12.4054 8.14746 12.9205 7.36849C13.4355 6.58952 13.7104 5.6737 13.7104 4.73684C13.7104 3.48055 13.2166 2.27572 12.3375 1.38739C11.4584 0.499059 10.2662 0 9.02295 0ZM9.02295 7.57895C8.46669 7.57895 7.92292 7.41226 7.46041 7.09997C6.99789 6.78767 6.63741 6.3438 6.42454 5.82447C6.21167 5.30514 6.15597 4.73369 6.26449 4.18237C6.37301 3.63106 6.64088 3.12465 7.03421 2.72717C7.42755 2.32969 7.92869 2.05901 8.47426 1.94935C9.01983 1.83968 9.58533 1.89597 10.0992 2.11108C10.6132 2.32619 11.0524 2.69047 11.3615 3.15785C11.6705 3.62523 11.8354 4.17473 11.8354 4.73684C11.8354 5.49062 11.5391 6.21352 11.0117 6.74651C10.4842 7.27951 9.76887 7.57895 9.02295 7.57895ZM17.4604 18V17.0526C17.4604 15.2938 16.769 13.6071 15.5383 12.3634C14.3076 11.1197 12.6384 10.4211 10.8979 10.4211H7.14795C5.40747 10.4211 3.73827 11.1197 2.50756 12.3634C1.27685 13.6071 0.585449 15.2938 0.585449 17.0526V18H2.46045V17.0526C2.46045 15.7963 2.95431 14.5915 3.83339 13.7032C4.71246 12.8148 5.90475 12.3158 7.14795 12.3158H10.8979C12.1412 12.3158 13.3334 12.8148 14.2125 13.7032C15.0916 14.5915 15.5854 15.7963 15.5854 17.0526V18H17.4604Z"
            fill="#DEDEDE"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          className={styles}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7043 16.2848L14.3054 12.8958C15.402 11.4988 15.9971 9.77351 15.9948 7.99743C15.9948 6.41569 15.5258 4.86947 14.647 3.5543C13.7683 2.23913 12.5192 1.21408 11.0579 0.608771C9.59657 0.00346513 7.98855 -0.15491 6.43721 0.153672C4.88586 0.462254 3.46085 1.22393 2.34239 2.34239C1.22393 3.46085 0.462254 4.88586 0.153672 6.43721C-0.15491 7.98855 0.00346513 9.59657 0.608771 11.0579C1.21408 12.5192 2.23913 13.7683 3.5543 14.647C4.86947 15.5258 6.41569 15.9948 7.99743 15.9948C9.77351 15.9971 11.4988 15.402 12.8958 14.3054L16.2848 17.7043C16.3777 17.798 16.4883 17.8724 16.6101 17.9231C16.7319 17.9739 16.8626 18 16.9945 18C17.1265 18 17.2572 17.9739 17.379 17.9231C17.5008 17.8724 17.6114 17.798 17.7043 17.7043C17.798 17.6114 17.8724 17.5008 17.9231 17.379C17.9739 17.2572 18 17.1265 18 16.9945C18 16.8626 17.9739 16.7319 17.9231 16.6101C17.8724 16.4883 17.798 16.3777 17.7043 16.2848ZM1.99936 7.99743C1.99936 6.81112 2.35114 5.65146 3.01022 4.66508C3.66929 3.6787 4.60606 2.90991 5.70207 2.45593C6.79807 2.00196 8.00408 1.88317 9.16759 2.11461C10.3311 2.34605 11.3999 2.91731 12.2387 3.75615C13.0775 4.595 13.6488 5.66375 13.8802 6.82726C14.1117 7.99077 13.9929 9.19678 13.5389 10.2928C13.0849 11.3888 12.3162 12.3256 11.3298 12.9846C10.3434 13.6437 9.18373 13.9955 7.99743 13.9955C6.40664 13.9955 4.88101 13.3636 3.75615 12.2387C2.6313 11.1138 1.99936 9.58821 1.99936 7.99743Z"
            fill="#DEDEDE"
          />
        </svg>
      );
    case "views":
      return (
        <svg
          className={styles}
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 0C4.63636 0 1.33682 2.488 0 6C1.33682 9.512 4.63636 12 8.5 12C12.3636 12 15.6632 9.512 17 6C15.6632 2.488 12.3636 0 8.5 0ZM8.5 10C6.36727 10 4.63636 8.208 4.63636 6C4.63636 3.792 6.36727 2 8.5 2C10.6327 2 12.3636 3.792 12.3636 6C12.3636 8.208 10.6327 10 8.5 10ZM8.5 3.6C7.21727 3.6 6.18182 4.672 6.18182 6C6.18182 7.328 7.21727 8.4 8.5 8.4C9.78273 8.4 10.8182 7.328 10.8182 6C10.8182 4.672 9.78273 3.6 8.5 3.6Z"
            fill="#E2E2E2"
          />
        </svg>
      );
    case "closeModal":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L17 17M1 17L17 1"
            stroke="#373737"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "logout":
      return (
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.25 14.5V15.625C12.25 16.5201 11.8944 17.3786 11.2615 18.0115C10.6286 18.6444 9.77011 19 8.875 19H4.375C3.47989 19 2.62145 18.6444 1.98851 18.0115C1.35558 17.3786 1 16.5201 1 15.625V4.375C1 3.47989 1.35558 2.62145 1.98851 1.98851C2.62145 1.35558 3.47989 1 4.375 1H8.875C9.77011 1 10.6286 1.35558 11.2615 1.98851C11.8944 2.62145 12.25 3.47989 12.25 4.375V5.5M16.75 14.5L21.25 10L16.75 14.5ZM21.25 10L16.75 5.5L21.25 10ZM21.25 10H5.5H21.25Z"
            stroke="#DEDEDE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "write":
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.586 0.585573C13.9611 0.210631 14.4697 0 15 0C15.5303 0 16.0389 0.210631 16.414 0.585573L18 2.17157C18.3749 2.54663 18.5856 3.05524 18.5856 3.58557C18.5856 4.1159 18.3749 4.62452 18 4.99957L10 12.9996C9.62501 13.3747 9.11639 13.5855 8.586 13.5856H7C6.46957 13.5856 5.96086 13.3749 5.58579 12.9998C5.21071 12.6247 5 12.116 5 11.5856V9.99957C5.00011 9.46918 5.2109 8.96056 5.586 8.58557L13.586 0.585573ZM13.414 3.58557L15 5.17157L16.586 3.58557L17.293 4.29257L15 1.99957L13.414 3.58557ZM13.586 6.58557L12 4.99957L7 9.99957V11.5856H8.586L13.586 6.58557ZM0 4.58557C0 3.78992 0.316071 3.02686 0.87868 2.46425C1.44129 1.90164 2.20435 1.58557 3 1.58557H6C6.26522 1.58557 6.51957 1.69093 6.70711 1.87847C6.89464 2.066 7 2.32036 7 2.58557C7 2.85079 6.89464 3.10514 6.70711 3.29268C6.51957 3.48022 6.26522 3.58557 6 3.58557H3C2.73478 3.58557 2.48043 3.69093 2.29289 3.87847C2.10536 4.066 2 4.32036 2 4.58557V15.5856C2 15.8508 2.10536 16.1051 2.29289 16.2927C2.48043 16.4802 2.73478 16.5856 3 16.5856H14C14.2652 16.5856 14.5196 16.4802 14.7071 16.2927C14.8946 16.1051 15 15.8508 15 15.5856V12.5856C15 12.3204 15.1054 12.066 15.2929 11.8785C15.4804 11.6909 15.7348 11.5856 16 11.5856C16.2652 11.5856 16.5196 11.6909 16.7071 11.8785C16.8946 12.066 17 12.3204 17 12.5856V15.5856C17 16.3812 16.6839 17.1443 16.1213 17.7069C15.5587 18.2695 14.7956 18.5856 14 18.5856H3C2.20435 18.5856 1.44129 18.2695 0.87868 17.7069C0.316071 17.1443 0 16.3812 0 15.5856V4.58557Z"
            fill="#DEDEDE"
          />
        </svg>
      );
    case "upload":
      return (
        <svg
          className={styles}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 11.6667V15.2223C17 15.6938 16.8127 16.146 16.4793 16.4794C16.1459 16.8128 15.6937 17.0001 15.2222 17.0001H2.77778C2.30628 17.0001 1.8541 16.8128 1.5207 16.4794C1.1873 16.146 1 15.6938 1 15.2223V11.6667"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4446 5.44444L9.00011 1L4.55566 5.44444"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 1V11.6667"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.601393 8.31661C0.601394 8.00167 0.726504 7.69962 0.949204 7.47692C1.1719 7.25422 1.47395 7.12911 1.78889 7.12911L15.5473 7.12912L10.4481 2.03237C10.3377 1.92196 10.2502 1.79088 10.1904 1.64663C10.1306 1.50237 10.0999 1.34776 10.0999 1.19162C10.0999 1.03547 10.1306 0.88086 10.1904 0.736604C10.2502 0.592347 10.3377 0.461274 10.4481 0.350866C10.5586 0.240457 10.6896 0.152875 10.8339 0.0931217C10.9781 0.0333702 11.1328 0.00261614 11.2889 0.00261616C11.445 0.00261617 11.5996 0.0333703 11.7439 0.0931218C11.8882 0.152875 12.0192 0.240457 12.1296 0.350866L19.2546 7.47587C19.3652 7.58617 19.453 7.71722 19.5128 7.86149C19.5727 8.00576 19.6035 8.16042 19.6035 8.31662C19.6035 8.47281 19.5727 8.62748 19.5128 8.77175C19.453 8.91602 19.3652 9.04706 19.2546 9.15737L12.1296 16.2824C11.9067 16.5053 11.6042 16.6306 11.2889 16.6306C10.9736 16.6306 10.6711 16.5053 10.4481 16.2824C10.2252 16.0594 10.0999 15.757 10.0999 15.4416C10.0999 15.1263 10.2252 14.8238 10.4481 14.6009L15.5473 9.50412L1.78889 9.50411C1.47395 9.50411 1.1719 9.379 0.949204 9.1563C0.726504 8.9336 0.601393 8.63156 0.601393 8.31661Z"
            fill="black"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default GlobalSvgSelector;