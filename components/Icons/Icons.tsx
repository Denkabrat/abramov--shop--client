//Global
import { FC } from "react";

//Types
import { IIconsProps } from "../../types/types";

export const Icons: FC<IIconsProps> = ({ id }) => {
  switch (id) {
    case "profile-account":
      return (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M14.6182 11.1284C16.1539 10.0084 17.1539 8.19581 17.1539 6.15384C17.1539 2.76061 14.3933 0 11.0001 0C7.60685 0 4.84624 2.76061 4.84624 6.15384C4.84624 8.19581 5.84622 10.0084 7.38194 11.1284C3.56444 12.5892 0.846252 16.2905 0.846252 20.6154C0.846252 22.4817 2.36458 24 4.23086 24H17.7693C19.6356 24 21.1539 22.4817 21.1539 20.6154C21.1539 16.2905 18.4357 12.5892 14.6182 11.1284ZM6.69241 6.15384C6.69241 3.77859 8.62483 1.84617 11.0001 1.84617C13.3753 1.84617 15.3078 3.77859 15.3078 6.15384C15.3078 8.52909 13.3753 10.4616 11.0001 10.4616C8.62483 10.4616 6.69241 8.52909 6.69241 6.15384ZM17.7693 22.1538H4.23086C3.38257 22.1538 2.69242 21.4637 2.69242 20.6153C2.69242 16.0344 6.41918 12.3076 11.0001 12.3076C15.5811 12.3076 19.3078 16.0344 19.3078 20.6153C19.3078 21.4637 18.6176 22.1538 17.7693 22.1538Z" fill="black" />
              </svg>
      );
    case "cart":
      return (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M21 6H18C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H6V10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10V8H16V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z" fill="black" />
              </svg>
      );
    case "instagram":
      return (
              <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="35px"  height="35px">
                <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z" />
              </svg>
      );
    case "spiner":
      return (
              <svg  xmlns="http://www.w3.org/2000/svg"  style={{    margin: "auto",  background: "transperent",  display: "block", }}  width="200px"  height="200px"  viewBox="0 0 100 100"  preserveAspectRatio="xMidYMid" >
                <circle cx="50" cy="50"   fill="none"  stroke="black"  strokeWidth="5" r="19" strokeDasharray="89.5353906273091 31.845130209103033">
                  <animateTransform  attributeName="transform"  type="rotate"  repeatCount="indefinite" dur="0.78125s"  values="0 50 50;360 50 50"  keyTimes="0;1"></animateTransform>
                </circle>
              </svg>
      );
    case "mastercard":
      return (
              <svg  xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"  width="50"  height="50"  viewBox="0 0 48 48">
                <path  fill="#3F51B5"  d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"          ></path>
                <path  fill="#FFC107"  d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"></path>
                <path  fill="#FF3D00"  d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z" ></path>
              </svg>
      );
    case "visa":
      return (
              <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="50"  height="50"  viewBox="0 0 48 48">
                  <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z" ></path>
                  <path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path>
                  <path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z" ></path>
              </svg>
      );
    case "unionpay":
      return (
            <svg  xmlns="http://www.w3.org/2000/svg"  x="0px"  y="0px"  width="50"  height="50" viewBox="0 0 48 48">
              <linearGradient  id="Pc7gKrZO_wAWI2QBTIN8Ka_iY9a3migtW0L_gr1"  x1="2.234"  x2="13.54"  y1="24"  y2="24" gradientUnits="userSpaceOnUse" > <stop offset="0" stopColor="#f44f5a"></stop>  <stop offset=".443" stopColor="#ee3d4a"></stop>  <stop offset="1" stopColor="#e52030"></stop>  </linearGradient>  <path  fill="url(#Pc7gKrZO_wAWI2QBTIN8Ka_iY9a3migtW0L_gr1)"  d="M10,9h11.585c1.617,0,2.623,1.362,2.246,3.039l-5.394,23.927 c-0.381,1.671-2,3.034-3.618,3.034H3.235c-1.369-0.001-2.302-0.98-2.325-2.296c-0.004-0.237,0.021-0.484,0.079-0.739l5.396-23.927 C6.762,10.362,8.381,9,10,9" ></path>  <linearGradient id="Pc7gKrZO_wAWI2QBTIN8Kb_iY9a3migtW0L_gr2" x1="13.128"  x2="26.645"  y1="24" y2="24" gradientUnits="userSpaceOnUse" > <stop offset="0" stopColor="#0077d2"></stop>  <stop offset="1" stopColor="#0b59a2"></stop>  </linearGradient>  <path fill="url(#Pc7gKrZO_wAWI2QBTIN8Kb_iY9a3migtW0L_gr2)" d="M20.5,9h13.47c1.657,0,0.91,1.362,0.52,3.039l-5.527,23.928 C28.575,37.637,28.696,39,27.035,39H13.38c-1.39,0-2.336-0.955-2.379-2.246c-0.008-0.251,0.018-0.516,0.081-0.788l5.711-23.928 C17.187,10.362,18.657,9,20.316,9" ></path> <linearGradient id="Pc7gKrZO_wAWI2QBTIN8Kc_iY9a3migtW0L_gr3"  x1="24"  x2="47"  y1="24" y2="24"  gradientUnits="userSpaceOnUse" > <stop offset="0" stopColor="#37c6d0"></stop>  <stop offset="1" stopColor="#1a9ba1"></stop> </linearGradient> <path fill="url(#Pc7gKrZO_wAWI2QBTIN8Kc_iY9a3migtW0L_gr3)" d="M33.273,9h11.401c1.183,0,2.039,0.727,2.266,1.773c0.044,0.204,0.064,0.42,0.059,0.645 c-0.005,0.2-0.031,0.408-0.079,0.62l-5.393,23.928C41.146,37.637,39.525,39,37.906,39h-11.58c-1.355,0-2.279-0.953-2.324-2.241 c-0.009-0.253,0.016-0.518,0.078-0.792l5.578-23.928C30.036,10.362,31.653,9,33.273,9z" ></path> <path  fill="#fefefe" d="M19.364,18.117c-0.325-0.195-0.905-0.134-1.302,0.135c-0.396,0.263-0.45,0.636-0.126,0.833	c0.319,0.189,0.902,0.134,1.296-0.137C19.626,18.68,19.685,18.31,19.364,18.117z M42.308,19.376l-1.171,2.048L40.874,19l-1.24,0.294	l0.454,3.963l-1.415,2.293c-0.038,0.054-0.072,0.091-0.119,0.107c-0.052,0.025-0.118,0.03-0.21,0.03h-0.04L38,26.624l0.75,0.001	c0.53-0.002,0.904-0.288,1.092-0.625L44,19L42.308,19.376z M22.157,25l-0.404,0.701C21.666,25.854,21.518,26,21.19,26h-0.201	l-0.282,0.875h0.668c0.787,0,1.158-0.431,1.158-0.431h2.086l0.301-0.933h-1.752l0.28-0.51L22.157,25z M10.416,19.885	c-0.194,0.75-0.341,1.24-0.679,1.585c-0.233,0.238-0.593,0.351-0.923,0.35c-0.493,0-0.91-0.311-0.883-0.823	c0.002-0.038,0.007-0.078,0.014-0.119C8.187,19.531,9.242,16,9.242,16H7.275l-1.02,4.03c0,0-0.25,0.968-0.255,1.379	c-0.004,0.313,0.047,0.569,0.164,0.785C6.54,22.879,7.652,23,8.288,23c1.088,0,1.731-0.104,2.257-0.424	c0.839-0.51,1.082-1.2,1.341-2.175C12.178,19.305,13,16,13,16h-1.595C11.405,16,10.417,19.883,10.416,19.885z M13.701,23	l0.705-2.869C14.559,20.065,14.709,20,14.851,20c0.338,0,0.414,0.281,0.397,0.393C15.234,20.529,14.658,23,14.658,23h1.404	l0.491-2.068c0.204-0.764,0.307-1.152,0.177-1.468C16.594,19.111,16.246,19,15.924,19c-0.21,0-0.596,0.073-0.946,0.234	c-0.127,0.061-0.247,0.132-0.374,0.202l0.103-0.438l-1.493,0.234L12.25,23H13.701z M25.576,23l0.705-2.869	C26.434,20.065,26.584,20,26.726,20c0.338,0,0.414,0.281,0.397,0.393C27.109,20.529,26.533,23,26.533,23h1.404l0.491-2.068	c0.204-0.764,0.307-1.152,0.177-1.468C28.469,19.111,28.121,19,27.799,19c-0.21,0-0.596,0.073-0.946,0.234	c-0.127,0.061-0.247,0.132-0.374,0.202l0.103-0.438l-1.493,0.234L24.125,23H25.576z M17,23h1.451l0.75-3l-1.486,0.22L17,23z M35.424,16.62c-0.414-0.603-1.269-0.615-2.257-0.62c-0.001,0-0.727,0-0.727,0h-1.614L29,23h1.579l0.665-2.5h0.294	c1.007,0,1.972-0.014,2.809-0.618c0.585-0.426,1.033-0.992,1.228-1.757c0.05-0.187,0.09-0.41,0.096-0.633	C35.678,17.199,35.588,16.847,35.424,16.62z M33.742,18.19c-0.115,0.467-0.428,0.86-0.822,1.049	c-0.324,0.16-0.721,0.137-1.125,0.136h-0.252L32.175,17c0.142,0,0.38,0,0.62,0c0.75,0,0.988,0.477,0.986,0.875	C33.781,17.978,33.768,18.084,33.742,18.19z M28.47,29c0,0-0.075,0.219-0.099,0.293c-0.02,0.063-0.1,0.207-0.327,0.207h-0.419V29	H26.5v2.5c-0.007,0.183,0.179,0.5,0.998,0.5h0.932l0.286-0.876l-0.84,0.001c-0.25,0-0.245-0.116-0.248-0.3	c-0.003-0.2-0.003-0.575-0.003-0.575h0.794c0.73,0,0.89-0.606,0.946-0.787L29.474,29H28.47z"  ></path> <path  fill="#fefefe" d="M28.824,25c-1.502,0-1.795,0.67-1.795,0.67L27.235,25h-1.21l-1.979,6.083	c-0.021,0.07-0.048,0.18-0.046,0.299C24.006,31.664,24.174,32,24.964,32l0.718-0.001L26.002,31c0,0-0.36,0-0.485,0	c-0.157,0-0.125-0.13-0.125-0.13l0.709-2.152h1.778c1.47,0,1.743-0.9,1.875-1.31L30.538,25C30.538,25,29.369,25,28.824,25z M28.298,28h-2.001l0.206-0.604h2.005L28.298,28z M28.822,26.518c0,0-1.012-0.01-1.175,0.02c-0.717,0.124-1.018,0.508-1.018,0.508	L26.967,26h2.023L28.822,26.518z M37.507,19.234c0,0-0.01,0.04-0.028,0.111C37.325,19.179,37.07,19,36.668,19	c-0.5,0-0.937,0.179-1.45,0.617c-0.451,0.39-0.677,0.926-0.811,1.439c-0.052,0.19-0.083,0.491-0.083,0.694	c0,1.25,1.082,1.25,1.345,1.25c0.395,0,0.71-0.151,0.965-0.347C36.602,22.776,36.543,23,36.543,23h1.451L39,19L37.507,19.234z M36.098,22.116c-0.063,0-0.438,0-0.429-0.411c0.004-0.203,0.052-0.43,0.125-0.691c0.17-0.608,0.399-1.139,1-1.139	c0.47,0,0.461,0.377,0.26,1.133c-0.058,0.217-0.221,0.609-0.348,0.8C36.521,22.086,36.31,22.116,36.098,22.116z M23.768,19.493	C23.471,19.12,22.93,19.001,22.366,19c-0.339,0-1.149,0.031-1.796,0.579c-0.465,0.396-0.69,0.934-0.831,1.449	c-0.142,0.525-0.316,1.471,0.596,1.824C20.616,22.968,21.025,23,21.29,23c0.675,0.001,1.372-0.174,1.908-0.695	c0.413-0.422,0.614-1.051,0.685-1.31C24.114,20.138,23.964,19.737,23.768,19.493z M21.429,22.115c-0.063,0-0.438,0-0.429-0.411	c0.004-0.203,0.06-0.471,0.125-0.691c0.169-0.572,0.4-1.139,1-1.139c0.47,0,0.461,0.377,0.26,1.133	c-0.058,0.217-0.221,0.609-0.348,0.8C21.852,22.086,21.641,22.116,21.429,22.115z M20.847,27.115L20.556,28h0.846l-0.248,0.769	h-0.848L20,29.706h0.845l-0.536,1.639c-0.072,0.217-0.075,0.654,0.738,0.654h1.627L23,31c0,0-0.931,0-1.181,0	s-0.183-0.177-0.183-0.177l0.368-1.132h1.746l0.302-0.921h-1.747L22.56,28h1.713l0.297-0.885H20.847z M39.7,27.916L40,27h-4.037	l-0.294,0.916h1.211l-0.247,0.743h-1.232l-0.263,0.812h1.082l-0.963,1.265C35.18,30.847,35.017,31,34.749,31h-0.486l0.095-0.289	H33.94L35.479,26h0.547l0.172-0.518c0,0,0,0.381,0,0.517c0,0.434,0.125,0.626,0.821,0.626h0.478L37.8,25.69h-0.223	c-0.147,0.003-0.217-0.044-0.205-0.138V25c0,0-0.799,0-1.25,0c-1.175,0-1.903,0.055-2.193,0.132	c-0.351,0.09-0.807,0.357-0.807,0.357L33.279,25H31.98l-1.862,5.722h-0.28L29.52,31.69h2.874L32.293,32h1.229l0.1-0.31h0.402	L33.919,32h1.02c0.259,0,0.468-0.058,0.642-0.155c0.182-0.101,0.325-0.244,0.447-0.407l0.756-1.006l0.115,1.055	C36.928,31.679,37.002,32,37.791,32h0.568l0.329-1h-0.371c-0.265,0-0.322-0.195-0.337-0.297l-0.132-1.024h-0.615l0.25-0.208h1.703	l0.268-0.812h-1.585l0.251-0.743L39.7,27.916z M32.964,26h1.303l-0.278,0.853c0,0-0.462,0.028-0.693,0.08	c-0.393,0.09-0.72,0.248-0.72,0.248L32.964,26z M32.729,30.722h-1.306l0.347-1.064h1.303L32.729,30.722z M33.408,28.622	c0,0-0.346,0.043-0.574,0.095C32.435,28.832,31.979,29,31.979,29l0.4-1.218h1.308L33.408,28.622z" ></path>
            </svg>
      );
    case "mir":
      return (
              <svg width="50" height="50" enableBackground="new 0 0 780 500" viewBox="0 0 780 500" xmlns="http://www.w3.org/2000/svg" >
                <linearGradient id="a" gradientTransform="matrix(201.7633 0 0 -79 -72583.8438 21950.0254)"  gradientUnits="userSpaceOnUse"  x1="362.4047" x2="363.4047" y1="275.4307" y2="275.4307" >  <stop offset="0" stopColor="#00a0e5" /> <stop offset="1" stopColor="#0077c3" />  </linearGradient> <path  d="m40 0h700c22.1 0 40 17.9 40 40v420c0 22.1-17.9 40-40 40h-700c-22.1 0-40-17.9-40-40v-420c0-22.1 17.9-40 40-40z"  fill="#fff"  /> <g> <path  d="m544.1 240.5v108h60v-64h68c28.6-.2 52.9-18.5 62.1-44z"  fill="#37a72e" /> <path  d="m536.1 151.5c3.5 44.1 45.3 79 96.3 79h104.3c.8-4 1.2-8.2 1.2-12.5 0-36.6-29.5-66.2-66-66.5z" fill="url(#a)" /> <g fill="#37a72e">  <path d="m447.3 229.4v-.1.1c.7-1.2 1.8-1.9 3.2-1.9 2 0 3.5 1.6 3.6 3.5v116.5h60v-196h-60c-7.6.3-16.2 5.8-19.4 12.7l-47.7 102.4c-.1.4-.3.8-.5 1.2-.7 1-1.9 1.7-3.3 1.7-2.2 0-4-1.8-4-4v-114h-60v196h60c7.5-.4 15.9-5.9 19.1-12.7l49-105.1c-.1-.1 0-.2 0-.3z" />  <path d="m223.3 232.8-35.1 114.7h-43.2l-35-114.8c-.3-1.8-1.9-3.2-3.9-3.2-2.2 0-3.9 1.8-3.9 3.9v114h-60v-196h51.5 15.3c11 0 22.6 8.6 25.8 19.1l29.2 95.5c1.5 4.8 3.8 4.7 5.3 0l29.2-95.5c3.2-10.6 14.8-19.1 25.8-19.1h15.3 51.5v196h-60v-114s0 0 0-.1c0-2.2-1.8-3.9-3.9-3.9-2 .1-3.6 1.5-3.9 3.4z" />  </g> </g>
              </svg>
      );

      case 'dropdown-menu':
        return (
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="28px" height="28px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
        )
    default:
      return <svg></svg>;
  }
};
