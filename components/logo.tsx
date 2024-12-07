import type { FC, RefAttributes, SVGProps } from 'react'

export const Logo: FC<
  RefAttributes<SVGSVGElement> & Partial<SVGProps<SVGSVGElement>>
> = (props) => (
  <svg
    width={'175'}
    height={'44'}
    viewBox={'0 0 175 44'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M167.704 33.9944C167.773 33.7718 167.807 33.6048 167.807 33.4934C167.807 33.3221 167.739 33.2022 167.602 33.1337C167.473 33.0567 167.246 33.0181 166.921 33.0181L166.998 32.7226C168.325 32.7226 169.088 32.5985 169.285 32.3501L169.439 32.44L166.882 40.1351H167.011C167.67 38.7048 168.265 37.66 168.796 37.0005C169.336 36.3411 169.863 36.0113 170.376 36.0113C170.668 36.0113 170.895 36.097 171.057 36.2683C171.22 36.4396 171.301 36.6665 171.301 36.9491C171.301 37.2832 171.203 37.7114 171.006 38.2338C170.809 38.7562 170.526 39.4242 170.158 40.2378L169.734 41.2142C169.666 41.3769 169.597 41.5525 169.529 41.7409C169.469 41.9207 169.439 42.0492 169.439 42.1263C169.439 42.2291 169.456 42.3061 169.49 42.3575C169.524 42.4003 169.584 42.4218 169.67 42.4218C169.893 42.4218 170.137 42.259 170.402 41.9336C170.668 41.5996 170.916 41.1799 171.147 40.6746H171.443C171.169 41.3512 170.826 41.9293 170.415 42.4089C170.012 42.8799 169.571 43.1155 169.092 43.1155C168.484 43.1155 168.18 42.8414 168.18 42.2933C168.18 42.122 168.261 41.8608 168.424 41.5097L168.565 41.1628L169.066 39.9295C169.392 39.133 169.623 38.5464 169.76 38.1696C169.897 37.7842 169.965 37.5058 169.965 37.3345C169.965 37.0605 169.875 36.9235 169.696 36.9235C169.499 36.9235 169.229 37.1119 168.886 37.4887C168.544 37.8655 168.124 38.5079 167.627 39.4157C167.139 40.3149 166.608 41.5096 166.034 42.9998H164.775L167.704 33.9944Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M161.872 43.1799C161.375 43.1799 160.981 42.9957 160.69 42.6275C160.407 42.2506 160.266 41.7368 160.266 41.0859C160.266 40.3322 160.442 39.5572 160.793 38.7607C161.144 37.9556 161.602 37.2919 162.167 36.7695C162.741 36.2471 163.328 35.9858 163.927 35.9858C164.279 35.9858 164.565 36.0929 164.788 36.307C165.011 36.5211 165.122 36.8123 165.122 37.1806C165.122 37.5488 165.028 37.8871 164.839 38.1954C164.651 38.4952 164.433 38.6451 164.184 38.6451C164.047 38.6451 163.936 38.598 163.85 38.5038C163.765 38.4095 163.722 38.2982 163.722 38.1697C163.722 38.0584 163.748 37.9642 163.799 37.8871C163.859 37.81 163.94 37.7287 164.043 37.643C164.171 37.5231 164.266 37.4204 164.326 37.3347C164.386 37.2405 164.416 37.112 164.416 36.9493C164.416 36.8123 164.373 36.701 164.287 36.6153C164.21 36.5297 164.086 36.4869 163.915 36.4869C163.521 36.4869 163.139 36.7224 162.771 37.1934C162.411 37.6559 162.12 38.234 161.898 38.9277C161.675 39.6128 161.564 40.2552 161.564 40.8547C161.564 41.3086 161.632 41.6726 161.769 41.9466C161.906 42.2121 162.116 42.3449 162.399 42.3449C162.741 42.3449 163.084 42.1736 163.426 41.831C163.777 41.4799 164.103 41.0045 164.403 40.405H164.685C164.326 41.2872 163.902 41.9723 163.414 42.4605C162.934 42.9401 162.42 43.1799 161.872 43.1799Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M156.97 38.0797C157.175 37.463 157.278 37.0819 157.278 36.9363C157.278 36.7907 157.223 36.7179 157.111 36.7179C156.931 36.7179 156.713 36.8592 156.456 37.1419C156.199 37.4159 155.938 37.7713 155.672 38.2081H155.364C155.681 37.5915 156.062 37.0776 156.507 36.6665C156.961 36.2469 157.411 36.0371 157.856 36.0371C158.079 36.0371 158.246 36.1056 158.357 36.2426C158.477 36.3796 158.537 36.5466 158.537 36.7436C158.537 36.8892 158.507 37.0519 158.447 37.2318C158.387 37.4031 158.28 37.6857 158.126 38.0797L157.368 40.1351H157.484C158.546 37.3774 159.638 35.9985 160.76 35.9985C161.076 35.9985 161.235 36.1441 161.235 36.4353C161.235 36.6323 161.162 36.8164 161.017 36.9877C160.88 37.159 160.725 37.2446 160.554 37.2446C160.494 37.2446 160.43 37.2361 160.361 37.219C160.301 37.2018 160.259 37.189 160.233 37.1804C160.096 37.129 159.985 37.1033 159.899 37.1033C159.539 37.1033 159.081 37.5487 158.524 38.4394C157.976 39.3301 157.338 40.8502 156.61 42.9999H155.338L156.97 38.0797Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M149.088 43.1799C148.797 43.1799 148.57 43.0986 148.407 42.9358C148.244 42.7645 148.163 42.5419 148.163 42.2678C148.163 41.8995 148.274 41.4242 148.497 40.8419C148.728 40.2509 149.049 39.5058 149.461 38.6066L149.718 38.0542C149.743 37.9771 149.807 37.7972 149.91 37.5146C150.022 37.2234 150.077 37.0264 150.077 36.9237C150.077 36.7781 150.022 36.7053 149.91 36.7053C149.73 36.7053 149.512 36.8466 149.255 37.1292C148.998 37.4033 148.737 37.7587 148.471 38.1955H148.163C148.48 37.5874 148.861 37.0735 149.306 36.6539C149.76 36.2342 150.21 36.0244 150.655 36.0244C150.878 36.0244 151.045 36.0929 151.156 36.23C151.276 36.367 151.336 36.5383 151.336 36.7438C151.336 36.8894 151.302 37.0607 151.233 37.2577C151.165 37.4461 151.054 37.7244 150.899 38.0927L150.373 39.3645C150.047 40.1524 149.816 40.7305 149.679 41.0988C149.542 41.467 149.473 41.7411 149.473 41.921C149.473 42.1608 149.559 42.2807 149.73 42.2807C149.987 42.2807 150.304 42.0751 150.681 41.664C151.058 41.2529 151.477 40.6063 151.94 39.7242C152.283 39.0819 152.587 38.4396 152.852 37.7972C153.118 37.1549 153.259 36.6196 153.276 36.1914H154.766L153.006 41.2786C152.989 41.3215 152.938 41.4585 152.852 41.6897C152.775 41.921 152.736 42.0922 152.736 42.2036C152.736 42.392 152.814 42.4862 152.968 42.4862C153.19 42.4862 153.434 42.3235 153.7 41.998C153.965 41.664 154.214 41.2444 154.445 40.7391H154.753C154.471 41.4157 154.128 41.9938 153.726 42.4734C153.323 42.953 152.882 43.1928 152.402 43.1928C151.794 43.1928 151.49 42.9144 151.49 42.3577C151.49 42.2635 151.512 42.1479 151.555 42.0109C151.597 41.8739 151.649 41.7283 151.709 41.5741C151.726 41.5313 151.743 41.4842 151.76 41.4328C151.786 41.3814 151.811 41.3215 151.837 41.2529L152.647 39.0947H152.531C151.82 40.5164 151.195 41.5527 150.655 42.2036C150.116 42.8545 149.593 43.1799 149.088 43.1799Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M143.818 33.9944C143.887 33.7718 143.921 33.6048 143.921 33.4934C143.921 33.3221 143.852 33.2022 143.715 33.1337C143.587 33.0567 143.36 33.0181 143.035 33.0181L143.112 32.7226C144.439 32.7226 145.201 32.5985 145.398 32.3501L145.552 32.44L142.996 40.1351H143.124C143.784 38.7048 144.379 37.66 144.91 37.0005C145.45 36.3411 145.976 36.0113 146.49 36.0113C146.781 36.0113 147.008 36.097 147.171 36.2683C147.334 36.4396 147.415 36.6665 147.415 36.9491C147.415 37.2832 147.317 37.7114 147.12 38.2338C146.923 38.7562 146.64 39.4242 146.272 40.2378L145.848 41.2142C145.779 41.3769 145.711 41.5525 145.642 41.7409C145.582 41.9207 145.552 42.0492 145.552 42.1263C145.552 42.2291 145.57 42.3061 145.604 42.3575C145.638 42.4003 145.698 42.4218 145.784 42.4218C146.006 42.4218 146.25 42.259 146.516 41.9336C146.781 41.5996 147.03 41.1799 147.261 40.6746H147.556C147.282 41.3512 146.94 41.9293 146.529 42.4089C146.126 42.8799 145.685 43.1155 145.206 43.1155C144.598 43.1155 144.293 42.8414 144.293 42.2933C144.293 42.122 144.375 41.8608 144.538 41.5097L144.679 41.1628L145.18 39.9295C145.505 39.133 145.737 38.5464 145.874 38.1696C146.011 37.7842 146.079 37.5058 146.079 37.3345C146.079 37.0605 145.989 36.9235 145.809 36.9235C145.612 36.9235 145.343 37.1119 145 37.4887C144.657 37.8655 144.238 38.5079 143.741 39.4157C143.253 40.3149 142.722 41.5096 142.148 42.9998H140.889L143.818 33.9944Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M136.584 43.2052C135.642 43.2052 134.923 42.8926 134.426 42.2674C133.938 41.6337 133.694 40.8029 133.694 39.7752C133.694 38.7132 133.938 37.617 134.426 36.4865C134.923 35.3475 135.595 34.4054 136.443 33.6603C137.291 32.9066 138.216 32.5298 139.218 32.5298C139.637 32.5298 139.993 32.5983 140.284 32.7353C140.575 32.8724 140.832 33.0822 141.055 33.3648C141.132 33.4676 141.196 33.519 141.248 33.519C141.299 33.519 141.355 33.4547 141.415 33.3263L141.697 32.6454L141.993 32.6839L140.965 36.2681H140.657C140.717 35.7714 140.747 35.3774 140.747 35.0862C140.747 34.4525 140.635 33.9643 140.413 33.6217C140.198 33.2792 139.839 33.1079 139.333 33.1079C138.58 33.1079 137.89 33.4719 137.265 34.1998C136.64 34.9192 136.148 35.8014 135.788 36.8462C135.428 37.8825 135.248 38.8417 135.248 39.7238C135.248 40.5631 135.411 41.2097 135.736 41.6636C136.07 42.109 136.537 42.3317 137.137 42.3317C137.839 42.3317 138.477 42.0405 139.051 41.4581C139.625 40.8672 140.13 40.0921 140.567 39.1329H140.939C140.571 39.9893 140.19 40.7087 139.796 41.2911C139.411 41.8735 138.952 42.3402 138.421 42.6914C137.89 43.0339 137.278 43.2052 136.584 43.2052Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M161.332 25.0215C161.315 25.0729 161.268 25.2142 161.191 25.4454C161.123 25.6767 161.088 25.8651 161.088 26.0107C161.088 26.122 161.105 26.2077 161.14 26.2676C161.183 26.319 161.255 26.3447 161.358 26.3447C161.632 26.3447 161.928 26.1691 162.245 25.818C162.57 25.4583 162.87 25.0001 163.144 24.4434H163.452C163.127 25.2142 162.72 25.8523 162.232 26.3575C161.744 26.8628 161.23 27.1155 160.69 27.1155C160.099 27.1155 159.804 26.8329 159.804 26.2676C159.804 25.985 159.902 25.5653 160.099 25.0087L161.641 20.6023H160.677L160.819 20.2555C161.384 20.2212 161.842 20.0713 162.193 19.8058C162.553 19.5318 162.883 19.1121 163.182 18.5469H163.606L163.002 20.1912H164.261L164.133 20.6023H162.874L161.332 25.0215Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M159.178 18.7268C158.93 18.7268 158.728 18.654 158.574 18.5084C158.429 18.3628 158.356 18.1701 158.356 17.9303C158.356 17.6905 158.429 17.4978 158.574 17.3522C158.728 17.2066 158.93 17.1338 159.178 17.1338C159.426 17.1338 159.623 17.2066 159.769 17.3522C159.923 17.4978 160 17.6905 160 17.9303C160 18.1701 159.923 18.3628 159.769 18.5084C159.623 18.654 159.426 18.7268 159.178 18.7268ZM157.534 22.0668C157.756 21.4502 157.868 21.0734 157.868 20.9363C157.868 20.7908 157.812 20.718 157.701 20.718C157.521 20.718 157.302 20.8593 157.046 21.1419C156.789 21.416 156.527 21.7714 156.262 22.2082H155.954C156.27 21.5915 156.652 21.0777 157.097 20.6666C157.551 20.2469 158 20.0371 158.446 20.0371C158.669 20.0371 158.836 20.1056 158.947 20.2426C159.067 20.3797 159.127 20.5467 159.127 20.7437C159.127 20.8892 159.097 21.0605 159.037 21.2575C158.985 21.4459 158.891 21.7243 158.754 22.0925L157.637 25.2142C157.457 25.711 157.367 26.015 157.367 26.1263C157.367 26.2291 157.384 26.3062 157.418 26.3576C157.452 26.4004 157.512 26.4218 157.598 26.4218C157.821 26.4218 158.065 26.2591 158.33 25.9336C158.596 25.5996 158.844 25.18 159.075 24.6747H159.371C159.097 25.3513 158.754 25.9294 158.343 26.409C157.941 26.88 157.499 27.1155 157.02 27.1155C156.412 27.1155 156.108 26.8415 156.108 26.2933C156.108 26.1906 156.129 26.0707 156.172 25.9336C156.215 25.788 156.266 25.6339 156.326 25.4712L156.429 25.1757L157.534 22.0668Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M152.177 22.0797C152.383 21.463 152.486 21.0819 152.486 20.9363C152.486 20.7907 152.43 20.7179 152.319 20.7179C152.139 20.7179 151.92 20.8593 151.664 21.1419C151.407 21.4159 151.145 21.7714 150.88 22.2081H150.572C150.888 21.5915 151.27 21.0776 151.715 20.6666C152.169 20.2469 152.618 20.0371 153.064 20.0371C153.286 20.0371 153.453 20.1056 153.565 20.2426C153.685 20.3796 153.745 20.5467 153.745 20.7436C153.745 20.8892 153.715 21.0519 153.655 21.2318C153.595 21.4031 153.488 21.6857 153.334 22.0797L152.576 24.1351H152.691C153.753 21.3774 154.845 19.9985 155.967 19.9985C156.284 19.9985 156.442 20.1441 156.442 20.4353C156.442 20.6323 156.37 20.8164 156.224 20.9877C156.087 21.159 155.933 21.2446 155.762 21.2446C155.702 21.2446 155.637 21.2361 155.569 21.219C155.509 21.2018 155.466 21.189 155.44 21.1804C155.303 21.129 155.192 21.1033 155.106 21.1033C154.747 21.1033 154.289 21.5487 153.732 22.4394C153.184 23.3301 152.546 24.8502 151.818 26.9999H150.546L152.177 22.0797Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M149.769 18.7268C149.521 18.7268 149.319 18.654 149.165 18.5084C149.02 18.3628 148.947 18.1701 148.947 17.9303C148.947 17.6905 149.02 17.4978 149.165 17.3522C149.319 17.2066 149.521 17.1338 149.769 17.1338C150.017 17.1338 150.214 17.2066 150.36 17.3522C150.514 17.4978 150.591 17.6905 150.591 17.9303C150.591 18.1701 150.514 18.3628 150.36 18.5084C150.214 18.654 150.017 18.7268 149.769 18.7268ZM148.125 22.0668C148.347 21.4502 148.459 21.0734 148.459 20.9363C148.459 20.7908 148.403 20.718 148.292 20.718C148.112 20.718 147.893 20.8593 147.636 21.1419C147.379 21.416 147.118 21.7714 146.853 22.2082H146.544C146.861 21.5915 147.242 21.0777 147.688 20.6666C148.142 20.2469 148.591 20.0371 149.037 20.0371C149.259 20.0371 149.426 20.1056 149.538 20.2426C149.658 20.3797 149.718 20.5467 149.718 20.7437C149.718 20.8892 149.688 21.0605 149.628 21.2575C149.576 21.4459 149.482 21.7243 149.345 22.0925L148.227 25.2142C148.047 25.711 147.958 26.015 147.958 26.1263C147.958 26.2291 147.975 26.3062 148.009 26.3576C148.043 26.4004 148.103 26.4218 148.189 26.4218C148.411 26.4218 148.656 26.2591 148.921 25.9336C149.187 25.5996 149.435 25.18 149.666 24.6747H149.962C149.688 25.3513 149.345 25.9294 148.934 26.409C148.531 26.88 148.09 27.1155 147.611 27.1155C147.003 27.1155 146.699 26.8415 146.699 26.2933C146.699 26.1906 146.72 26.0707 146.763 25.9336C146.806 25.788 146.857 25.6339 146.917 25.4712L147.02 25.1757L148.125 22.0668Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M144.895 20.0116C145.229 20.0116 145.503 20.1614 145.717 20.4612C145.931 20.7524 146.038 21.1806 146.038 21.7458C146.038 22.4567 145.867 23.236 145.525 24.0839C145.182 24.9232 144.737 25.6341 144.189 26.2164C143.64 26.7988 143.067 27.09 142.467 27.09C142.21 27.09 141.975 27.0429 141.761 26.9487C141.546 26.8459 141.362 26.7089 141.208 26.5376L140.579 28.5545C140.502 28.7772 140.463 28.9527 140.463 29.0812C140.463 29.2525 140.54 29.3681 140.694 29.4281C140.857 29.488 141.148 29.518 141.568 29.518L141.427 29.8263H138.086L138.176 29.518C138.493 29.518 138.737 29.4537 138.909 29.3253C139.071 29.1968 139.213 28.9399 139.333 28.5545L141.606 21.3091C141.358 21.7458 141.067 22.1655 140.733 22.568C140.407 22.962 140.065 23.2789 139.705 23.5187L139.538 23.2874C140.112 22.902 140.639 22.3539 141.118 21.6431C141.598 20.9322 141.936 20.2599 142.133 19.6262V19.639L142.351 18.9453H143.52L142.172 22.9663H142.287C142.655 22.1355 143.058 21.4375 143.495 20.8723C143.932 20.2985 144.398 20.0116 144.895 20.0116ZM142.326 26.5633C142.694 26.5633 143.067 26.3064 143.443 25.7925C143.829 25.2701 144.146 24.6449 144.394 23.9169C144.651 23.1889 144.779 22.5466 144.779 21.9899C144.779 21.2962 144.612 20.9494 144.278 20.9494C144.03 20.9494 143.743 21.1463 143.418 21.5403C143.092 21.9343 142.78 22.4267 142.48 23.0177C142.18 23.6 141.945 24.1696 141.773 24.7262L141.581 25.3429C141.572 25.7026 141.632 25.998 141.761 26.2293C141.898 26.4519 142.086 26.5633 142.326 26.5633Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M136.058 27.1154C135.621 27.1154 135.231 27.0298 134.888 26.8585C134.546 26.6872 134.22 26.4389 133.912 26.1134C133.844 26.0449 133.779 26.0107 133.719 26.0107C133.625 26.0107 133.544 26.1006 133.475 26.2804L133.231 26.9998H132.872L133.797 23.5056H134.105C134.071 23.6854 134.053 23.8867 134.053 24.1094C134.053 24.529 134.126 24.923 134.272 25.2912C134.426 25.6509 134.644 25.9421 134.927 26.1648C135.218 26.3789 135.556 26.486 135.942 26.486C136.481 26.486 136.884 26.3147 137.149 25.9721C137.415 25.6295 137.548 25.227 137.548 24.7645C137.548 24.3706 137.453 23.9895 137.265 23.6212C137.077 23.2444 136.785 22.7905 136.392 22.2595L135.801 21.4116C135.509 21.0005 135.291 20.6365 135.145 20.3197C135 19.9942 134.927 19.6259 134.927 19.2149C134.927 18.7353 135.038 18.2899 135.261 17.8788C135.484 17.4677 135.805 17.138 136.225 16.8896C136.653 16.6413 137.154 16.5171 137.728 16.5171C138.13 16.5171 138.481 16.5899 138.781 16.7355C139.081 16.8725 139.372 17.0952 139.655 17.4035C139.714 17.4634 139.77 17.4934 139.822 17.4934C139.881 17.4934 139.924 17.4506 139.95 17.365L140.22 16.7226H140.541L139.719 19.7287H139.41C139.436 19.506 139.449 19.3005 139.449 19.1121C139.449 18.4698 139.299 17.9773 138.999 17.6347C138.708 17.2836 138.318 17.108 137.83 17.108C137.308 17.108 136.905 17.2708 136.623 17.5962C136.349 17.9131 136.212 18.3028 136.212 18.7652C136.212 19.1078 136.276 19.4076 136.404 19.6645C136.541 19.9214 136.756 20.2597 137.047 20.6794L137.561 21.4116C137.603 21.4801 137.758 21.6942 138.023 22.0539C138.289 22.4136 138.494 22.7905 138.64 23.1844C138.794 23.5698 138.871 23.9424 138.871 24.3021C138.871 24.8074 138.76 25.2741 138.537 25.7023C138.323 26.1306 138.002 26.4731 137.573 26.7301C137.154 26.987 136.648 27.1154 136.058 27.1154Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M173.875 5.56591C173.455 5.56591 173.134 5.62586 172.911 5.74577C172.688 5.86567 172.491 6.10547 172.32 6.46517C171.721 7.64705 171.117 8.60197 170.509 9.32994C170.946 9.85236 171.429 10.1136 171.96 10.1136C172.397 10.1136 172.744 9.94229 173.001 9.59971C173.258 9.25714 173.386 8.79038 173.386 8.19945C173.386 7.89969 173.348 7.56997 173.271 7.21027L173.553 7.10749C173.673 7.55284 173.733 7.96393 173.733 8.34076C173.733 9.19719 173.515 9.88234 173.078 10.3962C172.65 10.9101 172.072 11.167 171.344 11.167C170.667 11.167 170.055 10.8844 169.507 10.3191C168.762 10.9101 167.978 11.2055 167.156 11.2055C166.454 11.2055 165.88 11.0171 165.434 10.6403C164.998 10.2634 164.779 9.7239 164.779 9.02162C164.779 8.24227 165.041 7.56997 165.563 7.00472C166.085 6.43091 166.809 5.87851 167.734 5.34752C167.725 5.22762 167.721 5.0649 167.721 4.85936C167.721 3.98579 167.91 3.21929 168.286 2.55983C168.672 1.89182 169.143 1.38224 169.7 1.0311C170.265 0.679963 170.796 0.504395 171.292 0.504395C171.678 0.504395 171.986 0.611449 172.217 0.825557C172.457 1.0311 172.577 1.33085 172.577 1.72481C172.577 2.17872 172.444 2.58124 172.179 2.93238C171.913 3.28352 171.592 3.58755 171.215 3.84448C170.847 4.09285 170.363 4.37975 169.764 4.7052L169.134 5.05205C169.1 5.06918 169.074 5.08631 169.057 5.10344C169.126 5.76289 169.263 6.45232 169.468 7.17173C169.674 7.88257 169.939 8.48635 170.265 8.98308C170.753 8.34932 171.215 7.51858 171.652 6.49086C171.704 6.3624 171.746 6.24678 171.781 6.14401C171.815 6.03267 171.832 5.94703 171.832 5.88708C171.832 5.75861 171.768 5.67297 171.639 5.63015C171.519 5.58732 171.305 5.56591 170.997 5.56591L171.113 5.2576H173.977L173.875 5.56591ZM171.267 0.928329C170.95 0.928329 170.616 1.0782 170.265 1.37796C169.914 1.66914 169.618 2.08023 169.378 2.61122C169.139 3.14221 169.019 3.73743 169.019 4.39688V4.64097C170.928 3.63037 171.883 2.62835 171.883 1.63489C171.883 1.41221 171.828 1.24093 171.716 1.12103C171.614 0.992561 171.464 0.928329 171.267 0.928329ZM167.773 10.5247C168.286 10.5247 168.779 10.3534 169.25 10.0108C168.864 9.50551 168.548 8.88459 168.299 8.14806C168.059 7.41153 167.892 6.67499 167.798 5.93846C167.293 6.33242 166.899 6.76064 166.616 7.22311C166.334 7.67702 166.192 8.19088 166.192 8.76469C166.192 9.36419 166.338 9.80954 166.629 10.1007C166.92 10.3833 167.301 10.5247 167.773 10.5247Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M160.091 10.4218C160.314 10.4218 160.554 10.259 160.811 9.93358C161.076 9.60814 161.329 9.18849 161.569 8.67463H161.864C161.59 9.34265 161.247 9.91646 160.836 10.3961C160.434 10.8757 159.993 11.1155 159.513 11.1155C158.905 11.1155 158.601 10.8414 158.601 10.2933C158.601 10.182 158.622 10.0535 158.665 9.90789C158.708 9.75373 158.759 9.58673 158.819 9.40688C158.828 9.37262 158.841 9.33836 158.858 9.30411C158.875 9.26128 158.892 9.21418 158.909 9.1628L159.385 7.76253H159.205C158.794 8.65322 158.327 9.44542 157.805 10.1391C157.291 10.8328 156.781 11.1797 156.276 11.1797C155.908 11.1797 155.621 11.0213 155.415 10.7044C155.218 10.3875 155.12 9.97212 155.12 9.45826C155.12 8.71317 155.317 7.9124 155.711 7.05597C156.113 6.19097 156.614 5.46729 157.214 4.88491C157.813 4.30254 158.4 4.01135 158.974 4.01135C159.385 4.01135 159.684 4.1441 159.873 4.40959C160.061 4.67508 160.147 5.02622 160.13 5.463H160.155L161.324 1.99445C161.384 1.79747 161.414 1.65616 161.414 1.57052C161.414 1.37354 161.333 1.23222 161.17 1.14658C161.008 1.06094 160.751 1.01812 160.4 1.01812L160.477 0.722647C161.205 0.722647 161.744 0.696953 162.095 0.645567C162.446 0.585617 162.703 0.487127 162.866 0.350098L163.02 0.440023L160.117 9.20133C159.946 9.6895 159.86 9.99782 159.86 10.1263C159.86 10.2291 159.877 10.3061 159.911 10.3575C159.946 10.4003 160.006 10.4218 160.091 10.4218ZM156.815 10.2547C157.055 10.2547 157.346 10.0706 157.689 9.70235C158.032 9.33408 158.361 8.88017 158.678 8.34062C159.004 7.7925 159.252 7.27436 159.423 6.78619C159.586 6.31515 159.667 5.89978 159.667 5.54008C159.667 5.2489 159.62 5.0305 159.526 4.88491C159.44 4.73932 159.295 4.66652 159.089 4.66652C158.721 4.66652 158.323 4.92345 157.894 5.43731C157.475 5.95117 157.119 6.57637 156.828 7.3129C156.537 8.04943 156.391 8.71317 156.391 9.30411C156.391 9.93787 156.533 10.2547 156.815 10.2547Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M151.939 6.07967C152.145 5.46304 152.247 5.08192 152.247 4.93633C152.247 4.79074 152.192 4.71794 152.08 4.71794C151.901 4.71794 151.682 4.85925 151.425 5.14187C151.168 5.41593 150.907 5.77135 150.642 6.20813H150.333C150.65 5.5915 151.031 5.07764 151.477 4.66655C151.931 4.2469 152.38 4.03707 152.826 4.03707C153.048 4.03707 153.215 4.10559 153.327 4.24262C153.446 4.37965 153.506 4.54665 153.506 4.74363C153.506 4.88923 153.476 5.05195 153.416 5.2318C153.357 5.40309 153.249 5.68571 153.095 6.07967L152.337 8.13511H152.453C153.515 5.37739 154.607 3.99854 155.729 3.99854C156.046 3.99854 156.204 4.14413 156.204 4.43532C156.204 4.6323 156.131 4.81643 155.986 4.98772C155.849 5.159 155.695 5.24465 155.523 5.24465C155.463 5.24465 155.399 5.23608 155.331 5.21895C155.271 5.20182 155.228 5.18898 155.202 5.18041C155.065 5.12903 154.954 5.10333 154.868 5.10333C154.508 5.10333 154.05 5.54868 153.494 6.43937C152.945 7.33006 152.307 8.85023 151.579 10.9999H150.308L151.939 6.07967Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M145.959 11.1797C145.386 11.1797 144.923 10.9827 144.572 10.5888C144.229 10.1863 144.058 9.64671 144.058 8.97013C144.058 8.17365 144.238 7.39001 144.598 6.61922C144.957 5.84843 145.428 5.21895 146.011 4.73079C146.593 4.24262 147.193 3.99854 147.809 3.99854C148.383 3.99854 148.846 4.20408 149.197 4.61517C149.548 5.01769 149.723 5.55724 149.723 6.23383C149.723 7.03031 149.544 7.81394 149.184 8.58473C148.824 9.34696 148.353 9.97216 147.771 10.4603C147.188 10.9399 146.585 11.1797 145.959 11.1797ZM146.062 10.6273C146.422 10.6273 146.79 10.3747 147.167 9.86938C147.552 9.35552 147.874 8.72176 148.13 7.9681C148.387 7.21444 148.516 6.49932 148.516 5.82274C148.516 5.42021 148.447 5.10762 148.31 4.88494C148.182 4.65371 147.985 4.53809 147.719 4.53809C147.368 4.53809 147 4.7993 146.615 5.32172C146.229 5.83558 145.908 6.47363 145.651 7.23585C145.403 7.98951 145.279 8.70035 145.279 9.36837C145.279 10.2077 145.54 10.6273 146.062 10.6273Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M147.221 1.03097C146.879 1.03097 146.596 1.08664 146.373 1.19798C146.159 1.30931 145.954 1.53627 145.757 1.87884L140.49 11.2054H139.796L140.169 3.84435L136.109 11.2054H135.415L135.801 2.04585C135.818 1.75466 135.801 1.54055 135.749 1.40352C135.707 1.26649 135.621 1.17228 135.492 1.1209C135.364 1.06095 135.163 1.03097 134.889 1.03097L134.979 0.722656H138.37L138.293 1.03097C138.002 1.03097 137.783 1.06095 137.638 1.1209C137.492 1.18085 137.385 1.28362 137.317 1.42921C137.257 1.56624 137.218 1.77179 137.201 2.04585L136.79 8.89303H136.88L140.22 2.72671L140.259 2.04585C140.276 1.75466 140.267 1.54055 140.233 1.40352C140.199 1.26649 140.13 1.17228 140.027 1.1209C139.933 1.06095 139.779 1.03097 139.565 1.03097L139.642 0.722656H142.905L142.815 1.03097C142.515 1.03097 142.284 1.06095 142.121 1.1209C141.967 1.18085 141.856 1.28362 141.787 1.42921C141.727 1.56624 141.689 1.77179 141.672 2.04585L141.171 8.89303H141.261L145.14 1.87884C145.157 1.85315 145.2 1.77179 145.269 1.63476C145.346 1.48916 145.384 1.37783 145.384 1.30075C145.384 1.19798 145.311 1.12946 145.166 1.0952C145.029 1.05238 144.78 1.03097 144.421 1.03097L144.511 0.722656H147.311L147.221 1.03097Z'
      }
      fill={'black'}
    />
    <path
      d={'M10.5967 43.1884V7.6089H0V0H119V7.6089H19.6141V43.1884H10.5967Z'}
      fill={'black'}
    />
    <path
      d={
        'M30.6505 43.8478C25.4541 43.8478 21.735 41.0579 21.735 35.9346C21.735 30.2025 26.3201 28.4778 31.7204 27.7677C36.6111 27.159 38.3433 26.6517 38.3433 24.8763C38.3433 23.2023 37.2734 22.0864 34.7771 22.0864C32.1279 22.0864 30.8033 23.2531 30.5486 25.4343H22.9068C23.1106 20.6153 26.8296 16.5065 34.7262 16.5065C38.649 16.5065 41.2981 17.2167 43.1831 18.637C45.4247 20.2602 46.4946 22.7965 46.4946 26.043V39.1303C46.4946 41.2101 46.6984 42.3768 47.4116 42.8333V43.1884H39.3622C38.9546 42.6304 38.6999 41.6159 38.4961 40.297H38.3942C36.8659 42.4782 34.5733 43.8478 30.6505 43.8478ZM33.2997 38.5723C36.4074 38.5723 38.5471 36.6955 38.5471 33.9055V30.8112C37.4772 31.3692 35.9489 31.775 34.2676 32.1808C31.0581 32.891 29.7335 33.7026 29.7335 35.6809C29.7335 37.7607 31.2619 38.5723 33.2997 38.5723Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M64.7331 44C61.2688 44 58.4668 42.5797 56.8365 39.8912H56.7346V43.1884H48.7871V9.31707H57.0913V20.1588H57.2441C58.8744 17.9268 61.116 16.4558 64.6822 16.4558C71.4579 16.4558 75.8392 22.3907 75.8392 30.2025C75.8392 38.8259 71.4579 44 64.7331 44ZM62.3896 37.4563C65.6501 37.4563 67.4332 34.6664 67.4332 30.1518C67.4332 25.6879 65.6501 22.7458 62.2877 22.7458C58.6196 22.7458 56.8365 25.9415 56.8365 30.2025C56.8365 34.5142 58.9763 37.4563 62.3896 37.4563Z'
      }
      fill={'black'}
    />
    <path
      d={'M77.8225 43.1884V9.31707H86.2286V43.1884H77.8225Z'}
      fill={'black'}
    />
    <path
      d={
        'M102.129 43.9493C93.5194 43.9493 88.221 38.0143 88.221 30.1518C88.221 22.3907 93.6722 16.4558 101.62 16.4558C105.339 16.4558 108.294 17.6732 110.535 19.7023C113.643 22.5429 115.171 27.0575 115.12 32.333H96.3723C96.8818 35.8331 98.8177 38.0143 102.231 38.0143C104.422 38.0143 105.848 37.0505 106.561 35.4273H114.662C114.101 37.7607 112.573 39.9926 110.28 41.5652C108.09 43.0869 105.441 43.9493 102.129 43.9493ZM96.4232 27.4126H106.714C106.409 24.3183 104.473 22.34 101.773 22.34C98.6139 22.34 96.9837 24.3183 96.4232 27.4126Z'
      }
      fill={'black'}
    />
  </svg>
)