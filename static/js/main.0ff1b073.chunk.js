(this["webpackJsonpuse-mapbox-gl-js-with-react"]=this["webpackJsonpuse-mapbox-gl-js-with-react"]||[]).push([[0],{13:function(C,e,t){},14:function(C,e,t){"use strict";t.r(e);var s=t(1),a=t.n(s),c=t(4),n=t.n(c),l=(t(9),t(3)),o=t.n(l),i=t(0);o.a.accessToken="pk.eyJ1IjoiZnJhbmtpbW1hbnVlbCIsImEiOiJjaWxsenVqaXkwMDNpdTFsejVtNjQ3cGQ2In0.iOSYIq-3_gghbymLjd2CwA";class j extends a.a.PureComponent{constructor(C){super(C),this.state={lng:11.292,lat:60.783,zoom:9.26},this.mapContainer=a.a.createRef()}componentDidMount(){const{lng:C,lat:e,zoom:t}=this.state;new o.a.Map({container:this.mapContainer.current,style:"mapbox://styles/frankimmanuel/cl6vtjg21000d16q9fr97e5c8/draft",center:[C,e],zoom:t})}render(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{ref:this.mapContainer,className:"map-container"}),Object(i.jsxs)("div",{className:"nsc-card",children:[Object(i.jsxs)("svg",{viewBox:"0 0 1106 141",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("path",{d:"M61.4882 8.58743C72.0131 9.83399 74.2289 19.945 74.2289 34.0727V73.8242L29.7747 7.75639H0V8.58743C7.06283 9.69548 12.1868 13.9892 12.1868 24.5157V79.9185C12.1868 96.2623 9.4171 107.204 0 107.758V108.589H28.1128V107.758C18.4187 107.481 14.6796 96.2623 14.6796 79.9185V20.776L75.8908 110.944H76.7217V34.0727C76.7217 19.945 78.245 8.86444 87.6622 8.58743V7.75639H61.4882V8.58743Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M124.477 110.251C145.25 110.251 159.653 95.0157 159.653 72.0236C159.653 48.7544 145.804 34.3497 124.754 34.3497C103.981 34.3497 89.5782 49.5855 89.5782 72.5776C89.5782 95.8468 103.427 110.251 124.477 110.251ZM124.754 108.312C113.952 108.312 110.074 91.276 110.074 72.3006C110.074 52.4941 113.675 36.2888 124.477 36.2888C135.279 36.2888 139.157 53.3251 139.157 72.3006C139.157 92.1071 135.556 108.312 124.754 108.312Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M210.173 34.3497C202.695 34.3497 196.602 40.5825 190.508 49.3084V34.6267H189.954L164.057 40.721V41.5521C168.766 43.2141 171.12 45.7073 171.12 54.5717V94.1847C171.12 103.049 170.704 107.758 165.027 107.758V108.589H196.601V107.758C190.924 107.758 190.508 103.049 190.508 94.1847V50.6935C193.416 47.9234 196.186 47.0923 198.679 47.0923C202.695 47.0923 207.403 49.1699 211.004 53.1866H211.835L215.851 35.4578C213.912 34.6267 211.974 34.3497 210.173 34.3497Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M281.691 0.277013H281.137L255.24 5.26326V6.09431C259.948 7.75638 262.303 10.2495 262.303 19.1139V36.4273C258.979 35.1808 255.24 34.3497 251.085 34.3497C229.897 34.3497 215.217 50.001 215.217 74.5167C215.217 96.2623 226.85 110.251 242.084 110.251C250.947 110.251 257.871 105.127 262.58 98.6169L265.072 110.251H265.626L288.754 105.542V104.711C284.045 103.049 281.691 99.1709 281.691 90.3065V0.277013ZM251.085 101.664C239.729 101.664 235.713 87.3978 235.713 68.6994C235.713 51.9401 239.591 36.2888 250.531 36.2888C258.841 36.2888 262.303 45.0147 262.303 57.6189V96.5393C259.117 99.5864 255.24 101.664 251.085 101.664Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M307.11 25.2082C313.065 25.2082 318.05 20.3605 318.05 14.1277C318.05 8.17191 313.065 3.18566 307.11 3.18566C300.878 3.18566 296.031 8.17191 296.031 14.1277C296.031 20.3605 300.878 25.2082 307.11 25.2082ZM323.728 108.589V107.758C318.05 107.758 317.635 103.049 317.635 94.1847V34.6267H317.081L291.184 40.721V41.5521C295.892 43.2141 298.246 45.7073 298.246 54.5717V94.1847C298.246 103.049 297.831 107.758 292.153 107.758V108.589H323.728Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M360.391 110.251C375.763 110.251 383.796 100.279 389.335 90.0295L388.504 89.4755C384.627 95.2927 377.702 100.14 368.978 100.14C355.544 100.14 348.62 86.0128 348.62 65.7908C348.62 49.8625 353.052 36.2888 363.854 36.2888C372.717 36.2888 376.871 46.5383 379.087 57.4804H379.918L387.95 45.7073C382.688 39.336 373.963 34.3497 363.854 34.3497C343.358 34.3497 328.955 51.3861 328.955 73.5472C328.955 93.3536 339.757 110.251 360.391 110.251Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M447.557 110.251C467.776 110.251 481.348 96.5393 481.348 77.9794C481.348 60.389 470.13 53.8792 458.082 48.2004L450.881 44.7377C442.017 40.444 433.708 36.2888 433.708 25.3468C433.708 14.9587 440.217 8.0334 450.742 8.0334C461.683 8.0334 469.299 15.5128 476.778 31.3026H477.609V10.942C470.961 8.44892 459.605 6.09431 451.989 6.09431C433.985 6.09431 421.937 18.9754 421.937 36.4273C421.937 53.0481 432.462 59.558 440.91 63.7132L448.249 67.1758C459.467 72.5776 469.576 77.7024 469.576 89.7525C469.576 101.387 460.852 108.312 450.327 108.312C436.34 108.312 427.338 97.9244 420.552 79.78H419.721L420.691 105.265C427.338 108.035 439.663 110.251 447.557 110.251Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M534.549 95.7082C530.949 98.6169 526.24 101.249 522.086 101.249C515.854 101.249 512.392 97.6473 512.392 90.445V42.2446H531.918L534.272 36.0118H512.392V15.3743H511.561C504.775 28.9479 497.573 34.7652 487.741 39.336L485.802 40.3055V42.2446H493.003V90.722C493.003 104.573 499.651 110.251 510.868 110.251C519.454 110.251 528.733 104.711 535.38 96.2623L534.549 95.7082Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M582.485 36.8428C588.579 37.8124 591.764 43.9067 586.778 57.6189L576.946 84.2122L563.513 48.7544C561.02 42.5216 561.158 37.3969 567.39 36.8428V36.0118H534.153V36.8428C538.862 37.6739 541.078 42.9371 544.817 52.4941L567.39 110.113L564.205 118.977C558.666 134.075 550.356 135.044 539.139 124.656H538.308L536.923 140.169C539.416 140.723 541.77 141 544.263 141C552.988 141 560.881 134.629 566.282 120.085L589.133 58.4499C594.257 44.3222 598.411 37.6739 602.981 36.8428V36.0118H582.485V36.8428Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M634.505 108.589V107.758C628.828 107.758 628.412 103.049 628.412 94.1847V0.277013H627.858L601.961 5.26326V6.09431C606.67 7.75638 609.024 10.2495 609.024 19.1139V94.1847C609.024 103.049 608.608 107.758 602.93 107.758V108.589H634.505Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M700.257 90.3065C695.826 96.5393 688.763 100.417 680.592 100.417C665.636 100.417 659.404 86.2898 659.404 64.8212V63.4362H700.95C701.781 45.7073 691.533 34.3497 674.637 34.3497C654.141 34.3497 639.739 51.5246 639.739 73.5472C639.739 93.3536 650.541 110.251 671.314 110.251C686.824 110.251 695.41 100.694 701.088 90.8605L700.257 90.3065ZM674.083 36.2888C682.808 36.2888 684.885 45.9843 683.778 61.22H659.542C660.096 48.4774 664.389 36.2888 674.083 36.2888Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M781.96 110.251C794.84 110.251 805.088 106.512 811.596 103.603L814.505 77.5639H813.674C806.057 95.8468 795.809 108.312 781.406 108.312C764.511 108.312 754.955 87.1208 754.955 58.1729C754.955 29.3635 763.68 8.0334 781.406 8.0334C795.809 8.0334 805.226 19.945 812.012 36.1503H812.843L812.012 13.4352C805.503 10.111 795.117 6.09431 781.96 6.09431C753.709 6.09431 732.797 27.4244 732.797 58.4499C732.797 90.3065 752.463 110.251 781.96 110.251Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M854.914 110.251C875.687 110.251 890.089 95.0157 890.089 72.0236C890.089 48.7544 876.241 34.3497 855.191 34.3497C834.418 34.3497 820.015 49.5855 820.015 72.5776C820.015 95.8468 833.864 110.251 854.914 110.251ZM855.191 108.312C844.389 108.312 840.511 91.276 840.511 72.3006C840.511 52.4941 844.112 36.2888 854.914 36.2888C865.716 36.2888 869.593 53.3251 869.593 72.3006C869.593 92.1071 865.993 108.312 855.191 108.312Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M976.894 0C958.475 0 943.38 14.5432 943.38 36.0118H921.083V23.6847C921.083 12.0501 922.745 5.12476 928.146 5.12476C932.301 5.12476 937.425 9.27997 943.241 16.7593H944.072L945.872 2.35462C943.518 1.9391 937.563 1.66209 935.071 1.66209C916.652 1.66209 901.695 16.2053 901.695 36.0118L894.494 40.3055V42.2446H901.695V94.1847C901.695 103.049 901.28 107.758 895.602 107.758V108.589H927.177V107.758C921.499 107.758 921.083 103.049 921.083 94.1847V42.2446H943.38V94.1847C943.38 103.049 942.964 107.758 937.286 107.758V108.589H969V107.758C963.322 107.758 962.906 103.049 962.906 94.1847V42.2446H977.447L979.663 36.0118H962.906V22.0226C962.906 10.388 964.568 3.46267 969.969 3.46267C974.124 3.46267 979.109 8.86444 985.064 16.3438H985.895L987.696 0.692533C985.341 0.27701 979.386 0 976.894 0Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M1038.9 90.3065C1034.47 96.5393 1027.41 100.417 1019.24 100.417C1004.28 100.417 998.047 86.2898 998.047 64.8212V63.4362H1039.59C1040.42 45.7073 1030.18 34.3497 1013.28 34.3497C992.785 34.3497 978.382 51.5246 978.382 73.5472C978.382 93.3536 989.184 110.251 1009.96 110.251C1025.47 110.251 1034.05 100.694 1039.73 90.8605L1038.9 90.3065ZM1012.73 36.2888C1021.45 36.2888 1023.53 45.9843 1022.42 61.22H998.186C998.74 48.4774 1003.03 36.2888 1012.73 36.2888Z",fill:"#3D3D3D"}),Object(i.jsx)("path",{d:"M1105.17 90.3065C1100.74 96.5393 1093.67 100.417 1085.5 100.417C1070.55 100.417 1064.32 86.2898 1064.32 64.8212V63.4362H1105.86C1106.69 45.7073 1096.44 34.3497 1079.55 34.3497C1059.05 34.3497 1044.65 51.5246 1044.65 73.5472C1044.65 93.3536 1055.45 110.251 1076.23 110.251C1091.74 110.251 1100.32 100.694 1106 90.8605L1105.17 90.3065ZM1079 36.2888C1087.72 36.2888 1089.8 45.9843 1088.69 61.22H1064.45C1065.01 48.4774 1069.3 36.2888 1079 36.2888Z",fill:"#3D3D3D"})]}),Object(i.jsx)("h4",{children:"How many roasters are there in the Nordics? And how many of those roast nordic style coffee?"}),Object(i.jsx)("p",{className:"",children:"These questions motivated us to build a marketplace for specialty coffee lovers \u2013 a place where we can find roasters and coffee bars for our daily coffee. We hope to show you the answers soon."})]})]})}}t(11),t(12),t(13);n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0ff1b073.chunk.js.map