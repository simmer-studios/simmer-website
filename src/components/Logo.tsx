import { FC } from "react";

import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";

const Logo: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      className={cn("aspect-auto", className)}
      width="115"
      viewBox="0 0 115 56"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.30509 9.64782C8.84551 10.161 9.71973 10.8266 10.9357 11.6606C12.2232 12.5667 13.2643 13.3606 14.067 14.0422C14.8696 14.7238 15.5611 15.5658 16.1492 16.5602C16.7373 17.5545 17.0234 18.6772 17.0234 19.9281C17.0234 21.548 16.6578 22.8791 15.9187 23.9216C15.1875 24.9641 14.2418 25.7259 13.0974 26.199C11.9529 26.6721 10.7449 26.9127 9.48131 26.9127C7.39114 26.9127 5.71424 26.5438 4.4347 25.798C3.16312 25.0603 2.24917 24.0258 1.7008 22.7027C1.15243 21.3796 0.874268 19.8079 0.874268 17.9795H7.55009C7.55009 19.3187 7.68519 20.3211 7.94746 20.9867C8.20972 21.6522 8.5753 21.973 9.03625 21.973C9.29057 21.973 9.52104 21.8367 9.74357 21.556C9.9661 21.2753 10.0694 20.8824 10.0694 20.3772C10.0694 19.6154 9.88662 18.9418 9.52104 18.3644C9.15546 17.7871 8.69451 17.2819 8.14614 16.8569C7.59777 16.4319 6.83482 15.9026 5.87318 15.2771C4.79234 14.5795 3.93402 13.9781 3.29028 13.4568C2.64654 12.9356 2.09817 12.2941 1.63722 11.5323C1.17627 10.7705 0.945794 9.86434 0.945794 8.82187C0.945794 7.38647 1.2478 6.13552 1.85975 5.06899C2.4717 4.00247 3.33002 3.18453 4.44265 2.6232C5.55529 2.05386 6.85866 1.77319 8.35278 1.77319C10.1886 1.77319 11.7304 2.13405 12.9702 2.86377C14.21 3.5935 15.1319 4.5638 15.7439 5.76664C16.3479 6.96949 16.6578 8.29262 16.6578 9.72801H9.94226C9.91841 8.78178 9.78331 8.05205 9.54489 7.53884C9.30646 7.03364 8.98857 6.77703 8.59914 6.77703C8.25741 6.77703 7.98719 6.89732 7.78851 7.12185C7.58982 7.3544 7.49446 7.65912 7.49446 8.02799C7.49446 8.60536 7.76467 9.15065 8.30509 9.66386V9.64782Z" />
      <path d="M26.1548 2.18188V26.4954H19.4392V2.18188H26.1548Z" />
      <path d="M28.9127 2.18188H38.7596L40.9292 17.3939H41.3107L43.3055 2.18188H53.1523V26.4954H47.1282V11.8047H46.4368L44.1956 26.4954H37.8615L35.6203 11.8047H34.9289V26.4954H28.9048V2.18188H28.9127Z" />
      <path d="M55.902 2.18188H65.7488L67.9185 17.3939H68.2999L70.2947 2.18188H80.1416V26.4954H74.1174V11.8047H73.426L71.1848 26.4954H64.8508L62.6096 11.8047H61.9182V26.4954H55.894V2.18188H55.902Z" />
      <path d="M89.6069 2.18188V26.4954H82.8914V2.18188H89.6069ZM94.7012 2.18188V6.87298H85.2676V2.18188H94.7012ZM94.7012 11.7325V16.4236H85.2676V11.7325H94.7012ZM94.7012 21.8043V26.4954H85.2676V21.8043H94.7012Z" />
      <path d="M109.182 3.31256C110.366 4.06634 111.232 5.01258 111.796 6.14326C112.361 7.27393 112.639 8.42065 112.639 9.5834V10.5216C112.639 11.7004 112.376 12.8551 111.844 13.9778C111.311 15.1005 110.469 16.0387 109.293 16.7925C108.125 17.5462 106.622 17.9231 104.787 17.9231H104.167V26.5034H97.4512V2.18188H104.787C106.527 2.18188 107.997 2.55878 109.174 3.31256H109.182ZM105.931 8.39659C105.931 7.93149 105.836 7.56262 105.653 7.28195C105.47 7.00129 105.184 6.86497 104.795 6.86497H104.175V13.224H104.795C105.208 13.224 105.502 13.0877 105.669 12.8231C105.844 12.5584 105.931 12.1815 105.931 11.6924V8.38857V8.39659ZM109.682 15.1405L112.988 26.5034H106.964L105.279 17.0571L109.682 15.1486V15.1405Z" />
      <path d="M8.30509 38.2194C8.84551 38.7326 9.71973 39.3981 10.9357 40.2321C12.2232 41.1383 13.2643 41.9321 14.067 42.6138C14.8696 43.2954 15.5611 44.1374 16.1492 45.1317C16.7373 46.1261 17.0234 47.2487 17.0234 48.4997C17.0234 50.1195 16.6578 51.4507 15.9187 52.4931C15.1875 53.5356 14.2418 54.2974 13.0974 54.7705C11.9529 55.2436 10.7449 55.4842 9.48131 55.4842C7.39114 55.4842 5.71424 55.1153 4.4347 54.3696C3.16312 53.6318 2.24917 52.5974 1.7008 51.2743C1.15243 49.9511 0.874268 48.3794 0.874268 46.5511H7.55009C7.55009 47.8902 7.68519 48.8926 7.94746 49.5582C8.20972 50.2238 8.5753 50.5445 9.03625 50.5445C9.29057 50.5445 9.52104 50.4082 9.74357 50.1275C9.9661 49.8469 10.0694 49.4539 10.0694 48.9487C10.0694 48.1869 9.88662 47.5134 9.52104 46.936C9.15546 46.3586 8.69451 45.8534 8.14614 45.4284C7.59777 45.0034 6.83482 44.4742 5.87318 43.8487C4.79234 43.151 3.93402 42.5496 3.29028 42.0284C2.64654 41.5071 2.09817 40.8656 1.63722 40.1038C1.17627 39.342 0.945794 38.4359 0.945794 37.3934C0.945794 35.958 1.2478 34.707 1.85975 33.6405C2.4717 32.574 3.33002 31.7561 4.44265 31.1947C5.55529 30.6254 6.85866 30.3447 8.35278 30.3447C10.1886 30.3447 11.7304 30.7056 12.9702 31.4353C14.21 32.165 15.1319 33.1353 15.7439 34.3382C16.3479 35.541 16.6578 36.8642 16.6578 38.2996H9.94226C9.91841 37.3533 9.78331 36.6236 9.54489 36.1104C9.30646 35.6052 8.98857 35.3486 8.59914 35.3486C8.25741 35.3486 7.98719 35.4689 7.78851 35.6934C7.58982 35.9259 7.49446 36.2307 7.49446 36.5995C7.49446 37.1769 7.76467 37.7222 8.30509 38.2354V38.2194Z" />
      <path d="M32.799 30.7537V35.4448H18.4062V30.7537H32.799ZM28.9842 30.7537V55.0672H22.2687V30.7537H28.9842Z" />
      <path d="M38.3303 54.2492C37.1699 53.4954 36.3355 52.5572 35.8189 51.4346C35.3023 50.3119 35.04 49.1572 35.04 47.9784V30.7456H41.7556V48.3232C41.7556 48.8124 41.8271 49.1892 41.9781 49.4539C42.1291 49.7185 42.3834 49.8548 42.749 49.8548C43.1146 49.8548 43.3769 49.7185 43.5199 49.4539C43.663 49.1892 43.7424 48.8124 43.7424 48.3232V30.7456H50.458V47.9784C50.458 49.2053 50.2196 50.3761 49.7348 51.4907C49.25 52.6053 48.4394 53.5275 47.287 54.2733C46.1426 55.011 44.6326 55.3879 42.7729 55.3879C40.9132 55.3879 39.4747 55.011 38.3144 54.2572L38.3303 54.2492Z" />
      <path d="M53.0491 30.7536H59.7646V55.0671H53.0491V30.7536ZM55.6956 50.376H60.2733C60.5753 50.376 60.7978 50.3119 60.9647 50.1836C61.1236 50.0553 61.2428 49.8788 61.3064 49.6623C61.378 49.4458 61.4097 49.1732 61.4097 48.8444V36.9603C61.4097 36.6556 61.37 36.3909 61.2905 36.1584C61.2111 35.9258 61.0839 35.7494 60.9091 35.6211C60.7342 35.4928 60.5276 35.4286 60.2733 35.4286H55.6956V30.7375H60.2733C62.1091 30.7375 63.6112 31.1144 64.7794 31.8682C65.9477 32.622 66.7981 33.5602 67.3306 34.6829C67.8551 35.8055 68.1253 36.9603 68.1253 38.1391V47.6576C68.1253 48.8364 67.863 49.9911 67.3306 51.1138C66.7981 52.2364 65.9557 53.1746 64.7794 53.9284C63.6112 54.6822 62.1091 55.0591 60.2733 55.0591H55.6956V50.368V50.376Z" />
      <path d="M77.5906 30.7537V55.0672H70.875V30.7537H77.5906Z" />
      <path d="M83.4636 54.2492C82.3032 53.4954 81.4688 52.5572 80.9522 51.4346C80.4356 50.3119 80.1733 49.1572 80.1733 47.9784V37.7301C80.1733 36.5513 80.4356 35.3966 80.9522 34.2739C81.4688 33.1513 82.3032 32.2131 83.4636 31.4593C84.6239 30.7055 86.1101 30.3286 87.9221 30.3286C89.7341 30.3286 91.2838 30.6975 92.4362 31.4433C93.5806 32.181 94.3992 33.1112 94.884 34.2258C95.3688 35.3405 95.6072 36.5032 95.6072 37.7381V47.9864C95.6072 49.2133 95.3688 50.3841 94.884 51.4987C94.3992 52.6133 93.5886 53.5355 92.4362 54.2813C91.2918 55.019 89.7818 55.3959 87.9221 55.3959C86.0624 55.3959 84.6239 55.019 83.4636 54.2652V54.2492ZM88.6612 49.4619C88.8122 49.1973 88.8837 48.8204 88.8837 48.3312V37.3853C88.8837 36.8962 88.8122 36.5193 88.6612 36.2546C88.5102 35.99 88.2558 35.8537 87.8903 35.8537C87.5247 35.8537 87.2624 35.99 87.1194 36.2546C86.9684 36.5193 86.8968 36.8962 86.8968 37.3853V48.3312C86.8968 48.8204 86.9684 49.1973 87.1194 49.4619C87.2704 49.7265 87.5247 49.8628 87.8903 49.8628C88.2558 49.8628 88.5181 49.7265 88.6612 49.4619Z" />
      <path d="M105.605 38.2194C106.146 38.7326 107.02 39.3981 108.236 40.2321C109.523 41.1383 110.564 41.9321 111.367 42.6138C112.17 43.2954 112.861 44.1374 113.449 45.1317C114.037 46.1261 114.323 47.2487 114.323 48.4997C114.323 50.1195 113.958 51.4507 113.219 52.4931C112.488 53.5356 111.542 54.2974 110.397 54.7705C109.253 55.2436 108.045 55.4842 106.781 55.4842C104.691 55.4842 103.014 55.1153 101.735 54.3696C100.463 53.6318 99.5492 52.5974 99.0008 51.2743C98.4525 49.9511 98.1743 48.3794 98.1743 46.5511H104.85C104.85 47.8902 104.985 48.8926 105.248 49.5582C105.51 50.2238 105.875 50.5445 106.336 50.5445C106.591 50.5445 106.821 50.4082 107.044 50.1275C107.266 49.8469 107.369 49.4539 107.369 48.9487C107.369 48.1869 107.187 47.5134 106.821 46.936C106.456 46.3586 105.995 45.8534 105.446 45.4284C104.898 45.0034 104.135 44.4742 103.173 43.8487C102.092 43.151 101.234 42.5496 100.59 42.0284C99.9466 41.5071 99.3982 40.8656 98.9373 40.1038C98.4763 39.342 98.2458 38.4359 98.2458 37.3934C98.2458 35.958 98.5478 34.707 99.1598 33.6405C99.7717 32.574 100.63 31.7561 101.743 31.1947C102.855 30.6254 104.159 30.3447 105.653 30.3447C107.489 30.3447 109.03 30.7056 110.27 31.4353C111.51 32.165 112.432 33.1353 113.044 34.3382C113.648 35.541 113.958 36.8642 113.958 38.2996H107.242C107.218 37.3533 107.083 36.6236 106.845 36.1104C106.607 35.6052 106.289 35.3486 105.899 35.3486C105.557 35.3486 105.287 35.4689 105.089 35.6934C104.89 35.9259 104.795 36.2307 104.795 36.5995C104.795 37.1769 105.065 37.7222 105.605 38.2354V38.2194Z" />
    </svg>
  );
};

export default Logo;
