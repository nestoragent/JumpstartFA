import React from 'react';
import './default.css';
import './hover.css';
import './Avenir/stylesheet.css';

const Default = () =>
    <div>
        <p className="mainHeader">Default State</p>
        <div className="mainBlock">
            <div className="ellipse"/>

            <div className="paperFrame">
                <div className="group1">
                    <div className="group1vector1"/>
                </div>
                <div className="group2">
                    <div className="group2vector1"/>
                </div>
                <div className="group3">
                    <div className="group3vector1"/>
                </div>
                <div className="group4">
                    <div className="group4vector1"/>
                </div>
                <div className="group5">
                    <div className="group5vector1"/>
                </div>
                <div className="group6">
                    <div className="group6vector1"/>
                </div>
                <div className="group7">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9118 0.00479126H2.82352C1.72058 0.00479126 0.862732 0.862634 0.862732 1.96558V4.41656C0.862732 5.5195 1.72058 6.37734 2.82352 6.37734H10.9118C12.0147 6.37734 12.8725 5.5195 12.8725 4.41656V1.96558C12.9951 0.862634 12.0147 0.00479126 10.9118 0.00479126ZM12.1372 4.53911C12.1372 5.15185 11.647 5.7646 10.9118 5.7646H2.82352C2.21077 5.7646 1.59803 5.2744 1.59803 4.53911V2.08812C1.59803 1.47538 2.08822 0.862634 2.82352 0.862634H10.9118C11.5245 0.862634 12.1372 1.35283 12.1372 2.08812V4.53911Z" fill="#DA0703"/>
                    </svg>
                </div>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7.23039V3.67647C25 3.55392 24.8775 3.43137 24.7549 3.30882L22.549 2.08333V0.367647C22.549 0.122549 22.4265 0 22.1814 0H3.67647H0.367647C0.122549 0 0 0.122549 0 0.367647V26.2255C0 26.4706 0.122549 26.5931 0.367647 26.5931H3.67647H22.1814C22.4265 26.5931 22.549 26.4706 22.549 26.2255V24.3873L24.7549 23.1618C24.8775 23.0392 25 22.9167 25 22.7941V19.3627C25 19.2402 24.8775 19.1176 24.7549 18.9951L23.7745 18.5049L24.7549 18.0147C24.8775 17.8922 25 17.7696 25 17.6471V14.2157C25 14.0931 24.8775 13.9706 24.7549 13.848L23.7745 13.3578L24.7549 12.8676C24.8775 12.7451 25 12.6226 25 12.5V8.94608C25 8.82353 24.8775 8.70098 24.7549 8.57843L23.7745 8.08824L24.7549 7.59804C24.8775 7.47549 25 7.35294 25 7.23039ZM0.857843 0.857843H3.30882V25.8578H0.857843V0.857843ZM21.8137 25.8578H4.04412V0.857843H21.8137V2.45098V7.72059V12.8676V12.9902V18.1373V24.2647V25.8578ZM24.1422 22.6716L22.549 23.5294V18.75L24.1422 19.6078V22.6716ZM24.1422 17.402L22.9167 18.0147L22.549 17.8922V13.6029L24.1422 14.4608V17.402ZM24.1422 12.1324L22.9167 12.7451L22.549 12.6226V8.33333L24.1422 9.19118V12.1324ZM24.1422 6.98529L22.9167 7.59804L22.549 7.35294V3.06373L24.1422 3.92157V6.98529Z" fill="#DA0703"/>
                </svg>
            </div>

            <p className="header">Corporate Bylaws</p>
            <p className="commonText">An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.</p>
            <div className="learnMoreButton">
                <p className="viewDocument">View document</p>
            </div>
        </div>
        <div className="pinkLink"/>

        <p className="mainHeaderHover">Hover State</p>
        <div className="pointsRectangle">
            <div className="threePointContainer">
                <div className="ellipse1"/>
                <div className="ellipse2"/>
                <div className="ellipse3"/>
            </div>
        </div>

        <div className="menuBackground">
            <div className="trash">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.16973 12.7548H7.16974V12.7516V5.95157C7.16974 5.74629 7.32893 5.6 7.50153 5.6C7.67225 5.6 7.83333 5.7475 7.83333 5.95157V12.7516C7.83333 12.9525 7.67532 13.1 7.50153 13.1C7.3236 13.1 7.16844 12.9521 7.16973 12.7548ZM11.1667 1.7V2.2H11.6667H14.1682C14.3414 2.2 14.4983 2.34616 14.4969 2.5483H14.4969V2.55157C14.4969 2.7525 14.3389 2.9 14.1651 2.9H13.6651V3.4V15.3C13.6651 15.9725 13.1338 16.5 12.4985 16.5H2.49847C1.86309 16.5 1.3318 15.9725 1.3318 15.3V3.4V2.9H0.831799C0.656824 2.9 0.5 2.75442 0.5 2.55157C0.5 2.34629 0.659195 2.2 0.831799 2.2H3.33333H3.83333V1.7V0.848435C3.83333 0.649923 3.99204 0.5 4.1682 0.5H10.8349C11.008 0.5 11.1667 0.646795 11.1667 0.848435V1.7ZM1.99847 15.3V15.8H2.49847H11.9985H12.4985H12.5015V15.3H12.9985V3.4V2.9H12.4985H2.49847H1.99847V3.4V15.3ZM5.33487 12.7516C5.33487 12.9501 5.17616 13.1 5 13.1C4.82502 13.1 4.6682 12.9544 4.6682 12.7516V5.95157C4.6682 5.74629 4.8274 5.6 5 5.6C5.17497 5.6 5.33487 5.74871 5.33487 5.95157V12.7516ZM10.3318 12.7516C10.3318 12.9525 10.1738 13.1 10 13.1C9.82594 13.1 9.66713 12.9549 9.66513 12.7496V5.95157C9.66513 5.74871 9.82503 5.6 10 5.6C10.1707 5.6 10.3318 5.7475 10.3318 5.95157V12.7516Z" fill="#EB5757" stroke="#EB5757"/>
                </svg>
            </div>

            <div className="arrowBackground"/>
            <div className="arrowLink">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.90909 8.17749L7.18182 11.3774M7.18182 11.3774L10.0909 8.17749M7.18182 11.3774V0M1 12.839V17.7771H13C13 17.7771 13 9.38238 13 14.5773" stroke="white" stroke-width="1.5"/>
                </svg>
            </div>

            <div className="printContainer">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6248 4.29999H15.1248V3.79999V2.66762V0.899994H15.7489C16.1488 0.899994 16.5904 1.10591 16.9422 1.46034C17.2939 1.81455 17.5 2.26103 17.5 2.66762V8.33237C17.5 8.73857 17.2935 9.18504 16.9413 9.5395C16.5889 9.89424 16.1472 10.1 15.7489 10.1H15.1248V8.33237V7.2V6.7H14.6248H3.37518H2.87518V7.2V8.33525V10.1029H2.25107C1.85161 10.1029 1.41002 9.89659 1.05792 9.5416C0.705987 9.18678 0.5 8.74021 0.5 8.33525V2.66762C0.5 2.26103 0.706145 1.81455 1.05777 1.46034C1.40962 1.10591 1.85122 0.899994 2.25107 0.899994H2.87518V2.66762V3.79999V4.29999H3.37518H14.6248Z" fill="#0F2137" stroke="#0F2137"/>
                </svg>
            </div>
            <div className="printContainer1">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6263 0.964708H1.1263V1.46471V2.59708V3.09708H1.6263H8.37665H8.87665V2.59708V1.46471V0.964708H8.37665H1.6263ZM1.6263 3.23234H1.1263V3.73234V4.86471V5.36471H1.6263H8.37665H8.87665V4.86471V3.73234V3.23234H8.37665H1.6263ZM9.00076 5.49996H0.999329V2.59996V0.832336H9.00076V2.59996V5.49996Z" fill="#0F2137" stroke="#0F2137"/>
                </svg>
            </div>

            <div className="printContainer2">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.999329 0.5H9.00076V3.4V5.16763H0.999329V3.4V0.5Z" fill="#0F2137" stroke="#0F2137"/>
                </svg>
            </div>

        </div>

        <p className="menuDownloadText">Download</p>
        <p className="menuPrintText">Print</p>
        <p className="menuDeleteText">Delete</p>


        <div className="mainBlockHover">
            <div className="ellipseHover"/>

            <div className="paperFrameHover">
                <div className="group1Hover">
                    <div className="group1vector1Hover"/>
                </div>
                <div className="group2Hover">
                    <div className="group2vector1Hover"/>
                </div>
                <div className="group3Hover">
                    <div className="group3vector1Hover"/>
                </div>
                <div className="group4Hover">
                    <div className="group4vector1Hover"/>
                </div>
                <div className="group5Hover">
                    <div className="group5vector1Hover"/>
                </div>
                <div className="group6Hover">
                    <div className="group6vector1Hover"/>
                </div>
                <div className="group7Hover">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9118 0.00479126H2.82352C1.72058 0.00479126 0.862732 0.862634 0.862732 1.96558V4.41656C0.862732 5.5195 1.72058 6.37734 2.82352 6.37734H10.9118C12.0147 6.37734 12.8725 5.5195 12.8725 4.41656V1.96558C12.9951 0.862634 12.0147 0.00479126 10.9118 0.00479126ZM12.1372 4.53911C12.1372 5.15185 11.647 5.7646 10.9118 5.7646H2.82352C2.21077 5.7646 1.59803 5.2744 1.59803 4.53911V2.08812C1.59803 1.47538 2.08822 0.862634 2.82352 0.862634H10.9118C11.5245 0.862634 12.1372 1.35283 12.1372 2.08812V4.53911Z" fill="#DA0703"/>
                    </svg>
                </div>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7.23039V3.67647C25 3.55392 24.8775 3.43137 24.7549 3.30882L22.549 2.08333V0.367647C22.549 0.122549 22.4265 0 22.1814 0H3.67647H0.367647C0.122549 0 0 0.122549 0 0.367647V26.2255C0 26.4706 0.122549 26.5931 0.367647 26.5931H3.67647H22.1814C22.4265 26.5931 22.549 26.4706 22.549 26.2255V24.3873L24.7549 23.1618C24.8775 23.0392 25 22.9167 25 22.7941V19.3627C25 19.2402 24.8775 19.1176 24.7549 18.9951L23.7745 18.5049L24.7549 18.0147C24.8775 17.8922 25 17.7696 25 17.6471V14.2157C25 14.0931 24.8775 13.9706 24.7549 13.848L23.7745 13.3578L24.7549 12.8676C24.8775 12.7451 25 12.6226 25 12.5V8.94608C25 8.82353 24.8775 8.70098 24.7549 8.57843L23.7745 8.08824L24.7549 7.59804C24.8775 7.47549 25 7.35294 25 7.23039ZM0.857843 0.857843H3.30882V25.8578H0.857843V0.857843ZM21.8137 25.8578H4.04412V0.857843H21.8137V2.45098V7.72059V12.8676V12.9902V18.1373V24.2647V25.8578ZM24.1422 22.6716L22.549 23.5294V18.75L24.1422 19.6078V22.6716ZM24.1422 17.402L22.9167 18.0147L22.549 17.8922V13.6029L24.1422 14.4608V17.402ZM24.1422 12.1324L22.9167 12.7451L22.549 12.6226V8.33333L24.1422 9.19118V12.1324ZM24.1422 6.98529L22.9167 7.59804L22.549 7.35294V3.06373L24.1422 3.92157V6.98529Z" fill="#DA0703"/>
                </svg>
            </div>

            <p className="headerHover">Corporate Bylaws</p>
            <p className="commonTextHover">An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.</p>
            <div className="learnMoreButtonHover">
                <p className="viewDocumentHover">View document</p>
            </div>
        </div>
        <div className="pinkLinkHover"/>
    </div>;

export default Default;
