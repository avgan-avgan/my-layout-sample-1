const icons = [
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.82 0H0.719989C0.471476 0 0.269989 0.201487 0.269989 0.45V2.25C0.269989 2.49851 0.471476 2.7 0.719989 2.7H1.16999V22.05C1.16999 22.2985 1.37148 22.5 1.61999 22.5H2.06999V26.55C2.06999 26.7985 2.27148 27 2.51999 27H4.31999C4.53385 27.0001 4.71824 26.8495 4.76099 26.64L5.58899 22.5H21.951L22.779 26.64C22.8217 26.8495 23.0061 27.0001 23.22 27H25.02C25.2685 27 25.47 26.7985 25.47 26.55V22.5H25.92C26.1685 22.5 26.37 22.2985 26.37 22.05V2.7H26.82C27.0685 2.7 27.27 2.49851 27.27 2.25V0.45C27.27 0.201487 27.0685 0 26.82 0ZM3.95099 26.1H2.96999V22.5H4.67099L3.95099 26.1ZM24.57 26.1H23.589L22.869 22.5H24.57V26.1ZM25.47 21.6H2.06999V2.7H25.47V21.6ZM26.37 1.8H1.16999V0.9H26.37V1.8Z" fill="#1C0F09"/>
            <path d="M23.67 3.60001H3.86998C3.62147 3.60001 3.41998 3.80149 3.41998 4.05001V11.25C3.41998 11.4985 3.62147 11.7 3.86998 11.7H23.67C23.9185 11.7 24.12 11.4985 24.12 11.25V4.05001C24.12 3.80149 23.9185 3.60001 23.67 3.60001ZM23.22 10.8H4.31998V4.50001H23.22V10.8Z" fill="#1C0F09"/>
            <path d="M23.67 12.6H3.86998C3.62147 12.6 3.41998 12.8015 3.41998 13.05V20.25C3.41998 20.4985 3.62147 20.7 3.86998 20.7H23.67C23.9185 20.7 24.12 20.4985 24.12 20.25V13.05C24.12 12.8015 23.9185 12.6 23.67 12.6ZM23.22 19.8H4.31998V13.5H23.22V19.8Z" fill="#1C0F09"/>
            <path d="M13.77 5.39999C13.0244 5.39999 12.42 6.0044 12.42 6.74999C12.42 7.49559 13.0244 8.09999 13.77 8.09999C14.5156 8.09999 15.12 7.49559 15.12 6.74999C15.12 6.0044 14.5156 5.39999 13.77 5.39999ZM13.77 7.19999C13.5215 7.19999 13.32 6.99851 13.32 6.74999C13.32 6.50148 13.5215 6.29999 13.77 6.29999C14.0185 6.29999 14.22 6.50148 14.22 6.74999C14.22 6.99851 14.0185 7.19999 13.77 7.19999Z" fill="#1C0F09"/>
            <path d="M13.77 14.4C13.0244 14.4 12.42 15.0044 12.42 15.75C12.42 16.4956 13.0244 17.1 13.77 17.1C14.5156 17.1 15.12 16.4956 15.12 15.75C15.12 15.0044 14.5156 14.4 13.77 14.4ZM13.77 16.2C13.5215 16.2 13.32 15.9985 13.32 15.75C13.32 15.5015 13.5215 15.3 13.77 15.3C14.0185 15.3 14.22 15.5015 14.22 15.75C14.22 15.9985 14.0185 16.2 13.77 16.2Z" fill="#1C0F09"/>
        </svg>
    ,
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.1 14.4828V3.15C26.0978 1.41126 24.6887 0.00225 22.95 0H20.358C19.5548 0.00028125 18.8129 0.429131 18.4118 1.125L17.4092 2.8575C16.4154 2.82026 15.4829 3.33681 14.9873 4.19895C14.8623 4.41377 14.9352 4.68922 15.15 4.81416C15.1505 4.81444 15.151 4.81472 15.1515 4.815L19.0485 7.065C19.1169 7.10449 19.1945 7.1253 19.2735 7.1253C19.313 7.12513 19.3523 7.11996 19.3905 7.11C19.5056 7.07884 19.6037 7.00329 19.6632 6.89985C20.1245 6.093 20.1396 5.10592 19.7033 4.28535L20.4863 2.925C20.567 2.78629 20.715 2.70073 20.8755 2.7H22.95C23.1985 2.7 23.4 2.90149 23.4 3.15V14.4H1.35C0.605925 14.4037 0.0037125 15.0059 0 15.75C0.0023625 16.32 0.362531 16.8272 0.9 17.0172V17.55C0.905906 21.4238 3.80357 24.6831 7.65 25.1424V25.65C7.65 26.3956 8.25441 27 9 27C9.74559 27 10.35 26.3956 10.35 25.65V25.2H16.65V25.65C16.65 26.3956 17.2544 27 18 27C18.7456 27 19.35 26.3956 19.35 25.65V25.1424C23.1964 24.6831 26.0941 21.4238 26.1 17.55V17.0185C26.2879 16.9548 26.4585 16.8482 26.5982 16.7071C26.857 16.4563 27.0022 16.1105 27 15.75C26.9976 15.18 26.6375 14.6728 26.1 14.4828ZM19.0584 6.03L16.0407 4.2876C16.4441 3.87574 17.0211 3.68331 17.591 3.77055C17.9494 3.82123 18.2833 3.98177 18.5468 4.23C18.6462 4.32276 18.7352 4.42614 18.8123 4.53825C19.1093 4.97526 19.1993 5.52071 19.0584 6.03ZM22.95 1.8H20.8755C20.3932 1.80073 19.9475 2.05779 19.7055 2.475L19.1025 3.52035C19.0913 3.51045 19.0773 3.5037 19.0656 3.4938C18.943 3.38749 18.8113 3.29231 18.6719 3.2094C18.564 3.14764 18.452 3.09336 18.3366 3.04695L19.1916 1.57365C19.432 1.15667 19.8767 0.899775 20.358 0.9H22.95C24.192 0.901462 25.1985 1.908 25.2 3.15V14.4H24.3V3.15C24.3 2.40441 23.6956 1.8 22.95 1.8ZM9.45 25.65C9.45 25.8985 9.24851 26.1 9 26.1C8.75149 26.1 8.55 25.8985 8.55 25.65V25.2H9.45V25.65ZM18.45 25.65C18.45 25.8985 18.2485 26.1 18 26.1C17.7515 26.1 17.55 25.8985 17.55 25.65V25.2H18.45V25.65ZM25.2 17.55C25.1958 21.2762 22.1762 24.2958 18.45 24.3H8.55C4.82383 24.2958 1.80422 21.2762 1.8 17.55V17.1H25.2V17.55ZM25.9619 16.0709C25.8797 16.1544 25.7672 16.2011 25.65 16.2H1.35C1.10149 16.2 0.9 15.9985 0.9 15.75C0.899775 15.6286 0.949781 15.5124 1.03815 15.4291C1.12028 15.3456 1.23283 15.2989 1.35 15.3H25.65C25.8985 15.3 26.1 15.5015 26.1 15.75C26.1002 15.8714 26.0502 15.9876 25.9619 16.0709Z" fill="#1C0F09"/>
            <path d="M16.875 6.32789C16.6598 6.20364 16.3845 6.27738 16.2603 6.49259L15.3603 8.05184C15.2346 8.26621 15.3065 8.54195 15.5208 8.66767C15.7352 8.79338 16.0109 8.7215 16.1367 8.50713C16.1377 8.50539 16.1387 8.50364 16.1397 8.5019L17.0397 6.94265C17.1639 6.72738 17.0902 6.45215 16.875 6.32789Z" fill="#1C0F09"/>
            <path d="M15.312 5.42903C15.098 5.30736 14.826 5.38026 14.7015 5.59261L13.8015 7.15186C13.6773 7.36707 13.751 7.6423 13.9662 7.76656C14.1814 7.89081 14.4567 7.81707 14.5809 7.60186L15.4809 6.04261C15.6037 5.82655 15.5282 5.55183 15.312 5.42903Z" fill="#1C0F09"/>
            <path d="M18.4296 7.22904C18.2156 7.10737 17.9436 7.18027 17.8191 7.39261L16.9191 8.95186C16.7948 9.16707 16.8686 9.4423 17.0838 9.56656C17.299 9.69082 17.5742 9.61707 17.6985 9.40186L18.5985 7.84261C18.7213 7.62655 18.6457 7.35183 18.4296 7.22904Z" fill="#1C0F09"/>
            <path d="M16.0796 9.50558C15.8643 9.38132 15.5889 9.45518 15.4647 9.6705L14.5647 11.2293C14.4404 11.4446 14.5143 11.72 14.7296 11.8442C14.9449 11.9685 15.2203 11.8946 15.3445 11.6793L16.2445 10.1205C16.3688 9.90518 16.2949 9.62983 16.0796 9.50558Z" fill="#1C0F09"/>
            <path d="M14.2796 8.60557C14.0643 8.48131 13.789 8.55517 13.6647 8.77049L12.7647 10.3293C12.6404 10.5445 12.7142 10.8197 12.9294 10.944C13.1445 11.0684 13.4198 10.995 13.5443 10.7798C13.5444 10.7796 13.5444 10.7795 13.5446 10.7793L14.4446 9.22049C14.5688 9.00517 14.495 8.72983 14.2796 8.60557Z" fill="#1C0F09"/>
        </svg>
    ,
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.82 0H0.719779C0.471265 0 0.269775 0.201489 0.269775 0.450004V26.55C0.269775 26.7985 0.471265 27 0.719779 27H26.82C27.0685 27 27.27 26.7985 27.27 26.55V0.450004C27.27 0.201489 27.0685 0 26.82 0ZM1.16978 16.1993L2.06979 16.1975V16.6501C2.06979 16.8987 2.27128 17.1001 2.51979 17.1001C2.76831 17.1001 2.9698 16.8987 2.9698 16.6501V16.1958L3.44534 16.1949C3.69385 16.1944 3.89495 15.9926 3.8945 15.744C3.89405 15.4958 3.69267 15.2949 3.4445 15.2949C3.44421 15.2949 3.44388 15.2949 3.4436 15.2949L2.9698 15.2958V14.8501C2.9698 14.6016 2.76831 14.4001 2.51979 14.4001C2.27128 14.4001 2.06979 14.6016 2.06979 14.8501V15.2975L1.16978 15.2993V4.50004H8.81985V5.43273C7.2954 5.65182 6.11982 6.96595 6.11982 8.55007C6.11982 8.79859 6.32131 9.00007 6.56983 9.00007H11.9699C12.2184 9.00007 12.4199 8.79859 12.4199 8.55007C12.4199 6.96595 11.2443 5.65177 9.71985 5.43273V4.05003C9.71985 3.80152 9.51836 3.60003 9.26985 3.60003H1.16978V2.70002H18.2699V24.3H1.16978V16.1993ZM9.26985 6.30005C10.3564 6.30005 11.2656 7.07434 11.4746 8.10007H7.065C7.27414 7.07434 8.18332 6.30005 9.26985 6.30005ZM26.37 26.1H1.16978V25.2002H26.37V26.1ZM26.37 24.3H24.12V21.6002H26.37V24.3ZM22.545 20.2502H24.795C24.9191 20.2502 25.02 20.3511 25.02 20.4752C25.02 20.5993 24.9191 20.7002 24.795 20.7002H22.545C22.4209 20.7002 22.32 20.5993 22.32 20.4752C22.32 20.3511 22.4209 20.2502 22.545 20.2502ZM22.095 19.3502C21.9709 19.3502 21.87 19.2492 21.87 19.1252C21.87 19.0011 21.9709 18.9002 22.095 18.9002H24.345C24.4691 18.9002 24.57 19.0011 24.57 19.1252C24.57 19.2492 24.4691 19.3502 24.345 19.3502H22.095ZM26.37 7.20006H25.8426C25.6568 6.67631 25.1567 6.30005 24.57 6.30005C23.9414 6.30005 23.4119 6.73183 23.2623 7.31436C22.9479 7.64719 22.77 8.08893 22.77 8.55007V16.2001C22.77 16.4486 22.9715 16.6501 23.22 16.6501H23.7465C24.4487 16.6501 25.02 16.0789 25.02 15.3766V8.92267C25.4029 8.78689 25.7067 8.48302 25.8426 8.10007H26.37V20.7002H25.8973C25.9121 20.6274 25.92 20.5522 25.92 20.4752C25.92 20.0756 25.7099 19.7249 25.3951 19.5253C25.4428 19.4007 25.47 19.2662 25.47 19.1252C25.47 18.5048 24.9653 18.0001 24.345 18.0001H22.095C21.4746 18.0001 20.9699 18.5048 20.9699 19.1252C20.9699 19.5248 21.18 19.8754 21.4948 20.0751C21.4472 20.1996 21.42 20.3341 21.42 20.4752C21.42 20.5522 21.4278 20.6274 21.4426 20.7002H21.42C21.1714 20.7002 20.9699 20.9017 20.9699 21.1502C20.9699 21.3987 21.1714 21.6002 21.42 21.6002H23.22V24.3H19.1699V2.70002H26.37V7.20006ZM25.02 7.65006C25.02 7.89818 24.8181 8.10007 24.57 8.10007C24.3219 8.10007 24.12 7.89818 24.12 7.65006C24.12 7.40194 24.3219 7.20006 24.57 7.20006C24.8181 7.20006 25.02 7.40194 25.02 7.65006ZM24.12 8.92267V15.3766C24.12 15.5826 23.9524 15.7501 23.7465 15.7501H23.67V8.6552C23.7999 8.77164 23.9523 8.86322 24.12 8.92267ZM26.37 1.80001H18.7199H1.16978V0.900007H26.37V1.80001Z" fill="#1C0F09"/>
            <path d="M20.52 14.8501C20.7685 14.8501 20.97 14.6486 20.97 14.4001V12.6001C20.97 12.3516 20.7685 12.1501 20.52 12.1501C20.2714 12.1501 20.0699 12.3516 20.0699 12.6001V14.4001C20.0699 14.6486 20.2714 14.8501 20.52 14.8501Z" fill="#1C0F09"/>
            <path d="M16.9199 12.1501C16.6714 12.1501 16.4699 12.3516 16.4699 12.6001V14.4001C16.4699 14.6486 16.6714 14.8501 16.9199 14.8501C17.1684 14.8501 17.3699 14.6486 17.3699 14.4001V12.6001C17.3699 12.3516 17.1684 12.1501 16.9199 12.1501Z" fill="#1C0F09"/>
            <path d="M7.46984 9.90009C7.22133 9.90009 7.01984 10.1016 7.01984 10.3501V11.2501C7.01984 11.4986 7.22133 11.7001 7.46984 11.7001C7.71835 11.7001 7.91984 11.4986 7.91984 11.2501V10.3501C7.91984 10.1016 7.71835 9.90009 7.46984 9.90009Z" fill="#1C0F09"/>
            <path d="M11.0699 9.90009C10.8214 9.90009 10.6199 10.1016 10.6199 10.3501V11.2501C10.6199 11.4986 10.8214 11.7001 11.0699 11.7001C11.3184 11.7001 11.5199 11.4986 11.5199 11.2501V10.3501C11.5199 10.1016 11.3184 9.90009 11.0699 9.90009Z" fill="#1C0F09"/>
            <path d="M9.26986 9.90009C9.02134 9.90009 8.81985 10.1016 8.81985 10.3501V11.2501C8.81985 11.4986 9.02134 11.7001 9.26986 11.7001C9.51837 11.7001 9.71986 11.4986 9.71986 11.2501V10.3501C9.71986 10.1016 9.51837 9.90009 9.26986 9.90009Z" fill="#1C0F09"/>
            <path d="M7.46984 15.3001C7.22133 15.3001 7.01984 15.5016 7.01984 15.7501V16.6501C7.01984 16.8987 7.22133 17.1001 7.46984 17.1001C7.71835 17.1001 7.91984 16.8987 7.91984 16.6501V15.7501C7.91984 15.5016 7.71835 15.3001 7.46984 15.3001Z" fill="#1C0F09"/>
            <path d="M11.0699 15.3001C10.8214 15.3001 10.6199 15.5016 10.6199 15.7501V16.6501C10.6199 16.8987 10.8214 17.1001 11.0699 17.1001C11.3184 17.1001 11.5199 16.8987 11.5199 16.6501V15.7501C11.5199 15.5016 11.3184 15.3001 11.0699 15.3001Z" fill="#1C0F09"/>
            <path d="M9.26986 15.3001C9.02134 15.3001 8.81985 15.5016 8.81985 15.7501V16.6501C8.81985 16.8987 9.02134 17.1001 9.26986 17.1001C9.51837 17.1001 9.71986 16.8987 9.71986 16.6501V15.7501C9.71986 15.5016 9.51837 15.3001 9.26986 15.3001Z" fill="#1C0F09"/>
            <path d="M7.46984 12.6001C7.22133 12.6001 7.01984 12.8016 7.01984 13.0501V13.9501C7.01984 14.1986 7.22133 14.4001 7.46984 14.4001C7.71835 14.4001 7.91984 14.1986 7.91984 13.9501V13.0501C7.91984 12.8016 7.71835 12.6001 7.46984 12.6001Z" fill="#1C0F09"/>
            <path d="M11.0699 12.6001C10.8214 12.6001 10.6199 12.8016 10.6199 13.0501V13.9501C10.6199 14.1986 10.8214 14.4001 11.0699 14.4001C11.3184 14.4001 11.5199 14.1986 11.5199 13.9501V13.0501C11.5199 12.8016 11.3184 12.6001 11.0699 12.6001Z" fill="#1C0F09"/>
            <path d="M9.26986 12.6001C9.02134 12.6001 8.81985 12.8016 8.81985 13.0501V13.9501C8.81985 14.1986 9.02134 14.4001 9.26986 14.4001C9.51837 14.4001 9.71986 14.1986 9.71986 13.9501V13.0501C9.71986 12.8016 9.51837 12.6001 9.26986 12.6001Z" fill="#1C0F09"/>
        </svg>
    ,
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.193 12.1519C27.0026 11.6108 26.4912 11.2491 25.9176 11.2499H10.169C9.92052 11.2499 9.7191 11.4514 9.7191 11.6999V13.0499H8.81917V6.74996H9.2691C10.0146 6.74996 10.619 6.14558 10.619 5.39997C10.619 4.65436 10.0146 4.04998 9.2691 4.04998H8.81917V2.69998H9.2691C9.51762 2.69998 9.71905 2.49854 9.71905 2.25V0.44998C9.71905 0.201444 9.51762 0 9.2691 0H0.719929C0.471415 0 0.269989 0.201444 0.269989 0.44998V2.24995C0.269989 2.49849 0.471415 2.69993 0.719929 2.69993H1.16987V13.4999C1.16987 13.7484 1.3713 13.9498 1.61981 13.9498H2.06975C2.21375 16.8478 3.73457 18.0538 5.08445 19.1203C6.7943 20.4703 8.40513 21.7438 7.4647 26.4598C7.41488 26.7033 7.57185 26.941 7.8153 26.9909C7.84947 26.9979 7.88427 27.0008 7.91913 26.9998H22.3178C22.5663 26.9997 22.7677 26.7982 22.7677 26.5497C22.7677 26.469 22.7459 26.3897 22.7048 26.3203C21.4179 24.1783 21.4179 22.4368 21.4179 19.7998C24.1807 18.8998 26.1739 16.5913 26.3675 13.8733C27.0708 13.626 27.4403 12.8552 27.193 12.1519ZM9.26916 4.94994C9.51767 4.94994 9.7191 5.15138 9.7191 5.39992C9.7191 5.64845 9.51767 5.8499 9.26916 5.8499H8.81922V4.94994H9.26916ZM1.16992 1.79997V0.89996H8.81922V1.79997H1.16992ZM2.0698 2.69998H7.91923V13.0499H2.0698V2.69998ZM8.45923 26.0998C9.26916 21.2759 7.43781 19.7998 5.66948 18.4139C4.35109 17.3834 3.11822 16.4069 2.96973 13.9499H9.26916C9.47164 16.6499 11.456 18.8999 14.1917 19.7998C14.1917 22.3378 14.1917 24.0523 13.0308 26.0998H8.45923ZM21.5575 26.0998H14.0792C15.0781 24.1109 15.1186 22.3469 15.1186 20.0519C15.7099 20.1811 16.3132 20.2475 16.9184 20.2499H18.7182C19.3234 20.2475 19.9268 20.1812 20.518 20.0519C20.5181 22.3469 20.5541 24.1109 21.5575 26.0998ZM18.7183 19.3499H16.9185C13.3728 19.3499 10.4616 16.9649 10.1961 13.9499H25.4406C25.1751 16.9649 22.2639 19.3499 18.7183 19.3499ZM25.9176 13.0499H10.619V12.1499H25.9176C26.1661 12.1499 26.3675 12.3513 26.3675 12.5999C26.3675 12.8484 26.1661 13.0499 25.9176 13.0499Z" fill="#1C0F09"/>
    </svg>
        ,
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.22 9H17.3322C15.2099 8.99983 13.0988 9.30617 11.0641 9.90945L10.17 10.1745V5.4H23.22C23.9656 5.4 24.57 4.79559 24.57 4.05V3.9249C24.566 3.25822 24.079 2.69286 23.4202 2.5902L6.18524 0.00495C6.16364 0.00174375 6.14181 0.0001125 6.11999 0C3.38753 0.00320625 1.1732 2.21754 1.16999 4.95V24.3828C0.63252 24.5728 0.272352 25.08 0.269989 25.65V26.55C0.269989 26.7985 0.471476 27 0.719989 27H10.62C10.8685 27 11.07 26.7985 11.07 26.55V25.65C11.0676 25.08 10.7075 24.5728 10.17 24.3828V21.15C10.1732 18.4175 12.3875 16.2032 15.12 16.2H20.07V18C20.07 18.2485 20.2715 18.45 20.52 18.45H25.02C25.2685 18.45 25.47 18.2485 25.47 18V16.2H26.82C27.0685 16.2 27.27 15.9985 27.27 15.75V13.05C27.2675 10.8143 25.4557 9.00247 23.22 9ZM6.08759 0.9L23.2866 3.47985C23.5062 3.51405 23.6686 3.7026 23.67 3.9249V4.05C23.67 4.29851 23.4685 4.5 23.22 4.5H2.09519C2.32542 2.46369 4.0384 0.919069 6.08759 0.9ZM10.17 26.1H1.16999V25.65C1.16999 25.4015 1.37148 25.2 1.61999 25.2H9.71999C9.9685 25.2 10.17 25.4015 10.17 25.65V26.1ZM24.57 17.55H20.97V16.2H24.57V17.55ZM26.37 15.3H15.12C11.8907 15.3037 9.2737 17.9207 9.26999 21.15V24.3H2.06999V5.4H9.26999V10.7775C9.26993 11.026 9.47136 11.2276 9.71993 11.2276C9.76324 11.2276 9.80628 11.2213 9.84779 11.209L11.3202 10.7725C13.2717 10.1936 15.2966 9.89977 17.3322 9.9H23.22C24.9588 9.90197 26.368 11.3111 26.37 13.05V15.3Z" fill="#1C0F09"/>
            <path d="M23.1403 19.5444C22.9831 19.3399 22.6899 19.3015 22.4854 19.4587C22.4532 19.4834 22.4244 19.5122 22.3996 19.5444C22.1611 19.89 20.07 22.9559 20.07 24.3C20.07 25.7912 21.2788 27 22.77 27C24.2612 27 25.47 25.7912 25.47 24.3C25.47 22.9559 23.3788 19.89 23.1403 19.5444ZM22.77 26.1C21.7759 26.1 20.97 25.2941 20.97 24.3C20.97 23.6084 21.96 21.8579 22.77 20.61C23.58 21.8583 24.57 23.6088 24.57 24.3C24.57 25.2941 23.7641 26.1 22.77 26.1Z" fill="#1C0F09"/>
        </svg>
    ,
    <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.7499 17.9999H2.25007C1.00937 17.9999 0 16.9906 0 15.7501V2.25007C0 1.00937 1.00937 0 2.25007 0H24.7499C25.9906 0 27 1.00937 27 2.25007V15.7501C27 16.9906 25.9906 17.9999 24.7499 17.9999ZM2.25007 0.899986C1.50561 0.899986 0.899986 1.50561 0.899986 2.25007V15.7501C0.899986 16.4943 1.50561 17.0999 2.25007 17.0999H24.7499C25.4944 17.0999 26.1 16.4943 26.1 15.7501V2.25007C26.1 1.50561 25.4944 0.899986 24.7499 0.899986H2.25007Z" fill="#1C0F09"/>
            <path d="M7.20008 12.6C6.20719 12.6 5.3999 11.7927 5.3999 10.8C5.3999 9.80735 6.20719 9.00006 7.20008 9.00006C8.19276 9.00006 9.00005 9.80735 9.00005 10.8C9.00005 11.7927 8.19276 12.6 7.20008 12.6ZM7.20008 9.90005C6.70364 9.90005 6.29989 10.3036 6.29989 10.8C6.29989 11.2963 6.70364 11.7 7.20008 11.7C7.69632 11.7 8.10007 11.2963 8.10007 10.8C8.10007 10.3036 7.69632 9.90005 7.20008 9.90005Z" fill="#1C0F09"/>
            <path d="M24.3 7.20009H14.4C14.1515 7.20009 13.9501 6.99883 13.9501 6.74999C13.9501 6.50115 14.1515 6.2999 14.4 6.2999H24.3C24.5484 6.2999 24.7499 6.50115 24.7499 6.74999C24.7499 6.99883 24.5484 7.20009 24.3 7.20009Z" fill="#1C0F09"/>
            <path d="M24.3 9.90005H14.4C14.1515 9.90005 13.9501 9.69879 13.9501 9.44995C13.9501 9.20111 14.1515 9.00006 14.4 9.00006H24.3C24.5484 9.00006 24.7499 9.20111 24.7499 9.44995C24.7499 9.69879 24.5484 9.90005 24.3 9.90005Z" fill="#1C0F09"/>
            <path d="M24.3 15.3H14.4C14.1515 15.3 13.9501 15.0989 13.9501 14.8501C13.9501 14.6012 14.1515 14.4 14.4 14.4H24.3C24.5484 14.4 24.7499 14.6012 24.7499 14.8501C24.7499 15.0989 24.5484 15.3 24.3 15.3Z" fill="#1C0F09"/>
            <path d="M24.3 12.6H14.4C14.1515 12.6 13.9501 12.3988 13.9501 12.1499C13.9501 11.9011 14.1515 11.7 14.4 11.7H24.3C24.5484 11.7 24.7499 11.9011 24.7499 12.1499C24.7499 12.3988 24.5484 12.6 24.3 12.6Z" fill="#1C0F09"/>
            <path d="M7.20007 8.10008C6.46282 8.10008 5.83783 7.52495 5.77665 6.79058L5.46931 3.10412C5.4413 2.76979 5.55562 2.43629 5.78345 2.1893C6.01066 1.94128 6.33366 1.79997 6.66943 1.79997H7.7305C8.06627 1.79997 8.38927 1.94128 8.61648 2.18889C8.8439 2.43587 8.95823 2.76938 8.93062 3.10371L8.62328 6.78996C8.5621 7.52495 7.93712 8.10008 7.20007 8.10008ZM6.66943 2.69996C6.55325 2.69996 6.47951 2.76155 6.44572 2.79801C6.41194 2.83509 6.35673 2.91378 6.36662 3.02934L6.67396 6.71581C6.69642 6.9871 6.92775 7.2001 7.20007 7.2001C7.47219 7.2001 7.70352 6.9871 7.72597 6.71581L8.03332 3.02934C8.04279 2.91378 7.988 2.83509 7.95421 2.79801C7.92043 2.76155 7.84668 2.69996 7.7305 2.69996H6.66943Z" fill="#1C0F09"/>
            <path d="M12.1499 4.49993H10.3499C10.1015 4.49993 9.90002 4.29888 9.90002 4.05004V2.25007C9.90002 2.00123 10.1015 1.79997 10.3499 1.79997H12.1499C12.3983 1.79997 12.6 2.00123 12.6 2.25007V4.05004C12.6 4.29888 12.3983 4.49993 12.1499 4.49993ZM10.8 3.59995H11.7V2.69996H10.8V3.59995Z" fill="#1C0F09"/>
            <path d="M4.05006 4.49993H2.25008C2.00166 4.49993 1.79999 4.29888 1.79999 4.05004V2.25007C1.79999 2.00123 2.00166 1.79997 2.25008 1.79997H4.05006C4.29848 1.79997 4.49995 2.00123 4.49995 2.25007V4.05004C4.49995 4.29888 4.29848 4.49993 4.05006 4.49993ZM2.69997 3.59995H3.59996V2.69996H2.69997V3.59995Z" fill="#1C0F09"/>
            <path d="M11.2499 16.2H3.15007C2.40582 16.2 1.79999 15.5943 1.79999 14.8501V6.75C1.79999 6.00574 2.40582 5.39992 3.15007 5.39992H6.15016C6.38417 5.39992 6.57904 5.57913 6.59882 5.81273L6.674 6.71581C6.69646 6.9871 6.92779 7.2001 7.20011 7.2001C7.47223 7.2001 7.70356 6.9871 7.72601 6.71581L7.8012 5.81273C7.82098 5.57913 8.01585 5.39992 8.24986 5.39992H11.2499C11.9944 5.39992 12.6 6.00574 12.6 6.75V14.8501C12.6 15.5943 11.9944 16.2 11.2499 16.2ZM3.15007 6.2999C2.90164 6.2999 2.69997 6.50157 2.69997 6.75V14.8501C2.69997 15.0983 2.90164 15.3 3.15007 15.3H11.2499C11.4984 15.3 11.7 15.0983 11.7 14.8501V6.75C11.7 6.50157 11.4984 6.2999 11.2499 6.2999H8.6639L8.62291 6.79058C8.56214 7.52495 7.93716 8.10008 7.20011 8.10008C6.46286 8.10008 5.83788 7.52495 5.7767 6.79058L5.73611 6.2999H3.15007Z" fill="#1C0F09"/>
        </svg>
        ,
    <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.65 1.11864H25.0074C24.8949 0.904983 24.7363 0.710153 24.5394 0.543661C24.1171 0.195576 23.5457 0.000139831 22.95 0H5.85003C4.82279 0.00261017 3.86165 0.420097 3.27468 1.11864H1.35003C0.604437 1.11864 3.05176e-05 1.61947 3.05176e-05 2.23729C3.05176e-05 2.85511 0.604437 3.35593 1.35003 3.35593H2.70003V21.6271C2.70003 21.833 2.90152 22 3.15003 22H21.15C21.3985 22 21.6 21.833 21.6 21.6271V20.8814H24.75C24.9985 20.8814 25.2 20.7144 25.2 20.5085V3.35593H25.65C26.3956 3.35593 27 2.85511 27 2.23729C27 1.61947 26.3956 1.11864 25.65 1.11864ZM2.82288 1.89498C2.79633 1.9718 2.77788 2.05085 2.76033 2.1299C2.75133 2.16942 2.73828 2.2082 2.73153 2.2481C2.71106 2.36808 2.70054 2.48903 2.70003 2.61017H1.35003C1.10152 2.61017 0.90003 2.44321 0.90003 2.23729C0.90003 2.03136 1.10152 1.86441 1.35003 1.86441H2.83098C2.82738 1.87447 2.82648 1.88492 2.82288 1.89498ZM20.7 21.2542H3.60003V18.2712H20.7V21.2542ZM20.7 17.5254H3.60003V16.0339H20.7V17.5254ZM21.1127 0.794237C21.0852 0.826678 21.06 0.860237 21.0353 0.89417C20.9988 0.943763 20.9651 0.994475 20.934 1.04705C20.9133 1.08434 20.8935 1.11864 20.8751 1.15556C20.8638 1.17868 20.849 1.19956 20.8391 1.22268L20.8364 1.22566C20.8105 1.24934 20.7885 1.27563 20.7707 1.30397C20.7584 1.31697 20.7473 1.33067 20.7374 1.34498C20.7129 1.39117 20.7002 1.44109 20.7 1.49153V15.2881H3.60003V2.61017C3.5975 2.28227 3.70286 1.96 3.90468 1.67797C4.30602 1.10196 5.04734 0.746695 5.85003 0.745763H21.15C21.1361 0.761051 21.1257 0.778576 21.1127 0.794237ZM21.9519 1.11193C22.0085 1.06029 22.0709 1.01321 22.1382 0.971356C22.1558 0.960169 22.1756 0.951593 22.1936 0.941525C22.2458 0.911835 22.3006 0.885267 22.3574 0.862102C22.3835 0.851288 22.41 0.841966 22.437 0.833017C22.4929 0.813953 22.5504 0.798106 22.6089 0.785661C22.635 0.780068 22.6607 0.773356 22.6872 0.769254C22.7737 0.754246 22.8617 0.746369 22.95 0.745763C23.3066 0.745763 23.6488 0.862335 23.9022 1.07017C23.9207 1.08583 23.94 1.10224 23.9562 1.11864H21.9452L21.9519 1.11193ZM24.3 20.1356H21.6V3.35593H24.3V20.1356ZM25.65 2.61017H21.6V1.86441H25.65C25.8985 1.86441 26.1 2.03136 26.1 2.23729C26.1 2.44321 25.8985 2.61017 25.65 2.61017Z" fill="#1C0F09"/>
    </svg>

    ,
    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5603 0C21.7666 0 21.1207 0.576848 21.1207 1.28569V1.76654C20.529 1.22698 19.7107 0.887986 18.8047 0.870415C18.7797 0.866558 18.7567 0.857129 18.7303 0.857129H2.79062C2.59194 0.359566 2.06406 0 1.43971 0C0.645968 0 3.05176e-05 0.576848 3.05176e-05 1.28569V25.7139C3.05176e-05 26.4227 0.645968 26.9996 1.43971 26.9996C2.23346 26.9996 2.8794 26.4227 2.8794 25.7139V25.2223C3.44999 25.7447 4.23174 26.0786 5.10035 26.1189C5.15458 26.1377 5.21216 26.1502 5.27407 26.1502H21.2114C21.2819 26.325 21.3908 26.4866 21.542 26.6224C21.8136 26.8659 22.1755 27 22.5603 27C23.3541 27 24 26.4232 24 25.7143V1.28612C24 0.576848 23.3541 0 22.5603 0ZM1.91913 25.7139C1.91913 25.9504 1.70414 26.1424 1.43923 26.1424C1.17433 26.1424 0.95934 25.9504 0.95934 25.7139V24.8567H1.91913V25.7139ZM1.91913 23.9996H0.95934V3.00167H1.91913V23.9996ZM1.91913 2.14454H0.95934V1.28569C0.95934 1.04913 1.17433 0.857129 1.43923 0.857129C1.69742 0.857129 1.90521 1.04098 1.91529 1.26898C1.91481 1.27498 1.91145 1.27969 1.91145 1.28569C1.91145 1.29727 1.91817 1.30755 1.91913 1.31869V2.14454ZM2.87892 3.00167H18.6943C18.7073 3.00252 18.7183 3.00852 18.7313 3.00852C19.2544 3.00852 19.68 3.38909 19.68 3.85665C19.68 4.32379 19.2544 4.70393 18.7313 4.70393C18.6934 4.70393 18.6598 4.7155 18.6243 4.72321H5.27359C4.3354 4.72321 3.48742 5.07078 2.87892 5.62705V3.00167ZM2.87892 9.7987C3.45479 10.3258 4.24662 10.6618 5.12482 10.6965C5.17281 10.7107 5.2208 10.7235 5.27407 10.7235H18.7317C18.7361 10.7235 18.7399 10.7214 18.7437 10.7214C19.2611 10.7274 19.68 11.1045 19.68 11.5682C19.68 12.0354 19.2544 12.4155 18.7313 12.4155C18.69 12.4155 18.653 12.4275 18.6151 12.4365H5.28319C5.27983 12.4365 5.27695 12.4348 5.27359 12.4348C4.3354 12.4348 3.48742 12.7824 2.87892 13.3386V9.7987ZM2.87892 17.5103C3.45191 18.0353 4.23894 18.37 5.11235 18.4077C5.16273 18.424 5.21648 18.4364 5.27359 18.4364H18.7313C18.738 18.4364 18.7433 18.4334 18.75 18.433C19.264 18.442 19.68 18.8174 19.68 19.2794C19.68 19.7465 19.2544 20.1267 18.7313 20.1267C18.6866 20.1267 18.6463 20.1391 18.6055 20.1494H5.29231C5.28559 20.149 5.28031 20.146 5.27359 20.146C4.3354 20.146 3.48742 20.4935 2.87892 21.0498V17.5103ZM21.1207 25.293H5.40412C5.36189 25.2823 5.32014 25.2695 5.27407 25.2695C3.95676 25.2695 2.88468 24.3125 2.88468 23.1356C2.88468 21.9635 3.95004 21.01 5.26159 21.004C5.26591 21.004 5.26975 21.0061 5.27359 21.0061H18.7313C18.8023 21.0061 18.8685 20.9902 18.9295 20.9654C19.8873 20.8754 20.6393 20.158 20.6393 19.279C20.6393 18.3391 19.7832 17.5737 18.7308 17.5737C18.7207 17.5737 18.7126 17.5784 18.7025 17.5789H5.39452C5.35517 17.5699 5.31678 17.557 5.27359 17.557C3.95628 17.557 2.8842 16.6 2.8842 15.4232C2.8842 14.2489 3.95292 13.2941 5.26735 13.2906C5.26975 13.2906 5.27119 13.2919 5.27359 13.2919H18.7313C18.8013 13.2919 18.8661 13.2774 18.9261 13.2534C19.8859 13.1646 20.6393 12.4464 20.6393 11.5665C20.6393 10.6267 19.7832 9.86127 18.7308 9.86127C18.7241 9.86127 18.7188 9.86427 18.7121 9.8647H5.38541C5.34893 9.85656 5.31342 9.84456 5.27407 9.84456C3.95676 9.84456 2.88468 8.88757 2.88468 7.71074C2.88468 6.53475 3.95628 5.57777 5.27407 5.57777H18.7317C18.8004 5.57777 18.8647 5.56448 18.9232 5.54134C19.8845 5.45391 20.6398 4.73521 20.6398 3.85408C20.6398 2.9361 19.8221 2.19082 18.8042 2.15568C18.7793 2.15182 18.7567 2.14239 18.7308 2.14239H2.87892V1.71426H18.6756C18.6948 1.7164 18.7116 1.72412 18.7313 1.72412C20.0481 1.72412 21.1197 2.6811 21.1197 3.85794C21.1197 5.03392 20.0486 5.99091 18.7313 5.99091C18.6934 5.99091 18.6598 6.00248 18.6243 6.01019H5.27359C4.22118 6.01019 3.36409 6.77475 3.36409 7.71459C3.36409 8.59786 4.1228 9.31742 5.08691 9.40271C5.1445 9.42414 5.20736 9.43614 5.27359 9.43614H18.7313C20.0481 9.43614 21.1197 10.3931 21.1197 11.57C21.1197 12.7459 20.0486 13.7029 18.7313 13.7029C18.69 13.7029 18.653 13.7149 18.6151 13.7239H5.28319C5.27983 13.7239 5.27695 13.7222 5.27359 13.7222C4.22118 13.7222 3.36409 14.4868 3.36409 15.4266C3.36409 16.3086 4.12088 17.0277 5.08307 17.1143C5.14162 17.137 5.20592 17.1499 5.27311 17.1499H18.7308C18.7332 17.1499 18.7346 17.1486 18.737 17.1486C20.051 17.152 21.1192 18.1073 21.1192 19.282C21.1192 20.458 20.0481 21.4149 18.7308 21.4149C18.6862 21.4149 18.6458 21.4274 18.6051 21.4377H5.29231C5.28559 21.4372 5.28031 21.4342 5.27359 21.4342C4.22118 21.4342 3.36409 22.1988 3.36409 23.1386C3.36409 24.0198 4.11896 24.738 5.07971 24.8263C5.13922 24.8499 5.20401 24.864 5.27311 24.864H21.1197V25.293H21.1207ZM21.1207 24.0056H5.38541C5.34893 23.9975 5.31342 23.9855 5.27407 23.9855C4.75051 23.9855 4.32436 23.6049 4.32436 23.1373C4.32436 22.6741 4.74379 22.2974 5.26159 22.2914C5.26591 22.2914 5.26975 22.2935 5.27359 22.2935H18.7313C18.7908 22.2935 18.846 22.2811 18.8992 22.2635C19.7674 22.2249 20.5491 21.8924 21.1207 21.3717V24.0056ZM21.1207 17.1897C20.5122 16.6356 19.6671 16.2902 18.7313 16.2902C18.7279 16.2902 18.725 16.2919 18.7217 16.2919H5.37581C5.34222 16.285 5.30958 16.2735 5.27359 16.2735C4.75002 16.2735 4.32388 15.8929 4.32388 15.4253C4.32388 14.9599 4.74667 14.5819 5.26735 14.5785C5.26975 14.5785 5.27119 14.5798 5.27359 14.5798H18.7313C18.786 14.5798 18.8373 14.5673 18.8863 14.5519C19.7592 14.5159 20.5462 14.1829 21.1202 13.6596V17.1897H21.1207ZM21.1207 9.47814C20.5122 8.924 19.6671 8.57858 18.7313 8.57858H5.36621C5.3355 8.57258 5.30622 8.56186 5.27359 8.56186C4.75002 8.56186 4.32388 8.1813 4.32388 7.71374C4.32388 7.2466 4.75002 6.86646 5.27359 6.86646H18.7313C18.7817 6.86646 18.8282 6.85403 18.8743 6.84075C19.752 6.80732 20.5438 6.47347 21.1207 5.94762V9.47814ZM23.0402 25.7139C23.0402 25.9504 22.8252 26.1424 22.5603 26.1424C22.4322 26.1424 22.3118 26.0979 22.2211 26.0169C22.1385 25.9427 22.0953 25.8463 22.0877 25.743C22.0881 25.7353 22.0929 25.7293 22.0929 25.7212C22.0929 25.7019 22.0833 25.6856 22.0809 25.6672V24.8567H23.0407V25.7139H23.0402ZM23.0402 23.9996H22.0805V3.00852H23.0402V23.9996ZM23.0402 2.15139H22.0805V1.28569C22.0805 1.04913 22.2954 0.857129 22.5603 0.857129C22.8252 0.857129 23.0402 1.04913 23.0402 1.28569V2.15139Z" fill="#1C0F09"/>
        </svg>

    ,
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.8486 1.06438C24.7016 0.439186 24.1427 -0.00205275 23.5002 7.1824e-06H16.6392C15.9967 -0.00205275 15.4378 0.439186 15.2907 1.06438L12.901 11.8644C12.8137 12.2583 12.9105 12.6705 13.1645 12.984C13.4286 13.3123 13.828 13.5023 14.2494 13.5H17.8197V16.2H15.1198C14.8711 16.2 14.6697 16.4014 14.6697 16.6501V17.0999C14.6728 19.2235 16.1576 21.0569 18.2342 21.501C18.0628 22.5921 17.1241 23.397 16.0197 23.4001H13.3196C12.0776 23.3986 11.0712 22.3921 11.0697 21.15V13.9501C11.0658 11.376 9.09136 9.23388 6.52633 9.02067C6.35185 8.12913 5.6593 7.42937 4.76961 7.24542V6.30012C4.76714 4.06426 2.95543 2.25255 0.71978 2.25008C0.471146 2.25008 0.269684 2.45154 0.269684 2.69997V18.8999C0.269684 19.1486 0.471146 19.35 0.71978 19.35C2.95543 19.3475 4.76714 17.5358 4.76961 15.3V14.3545C5.62799 14.1763 6.30488 13.5165 6.50532 12.6631C7.07551 12.8322 7.46751 13.3552 7.46978 13.9501V21.15C7.47328 24.3794 10.0904 26.9963 13.3196 27H16.0197C19.1068 26.9951 21.659 24.5932 21.8512 21.5121C23.9534 21.0894 25.4666 19.2441 25.4697 17.0999V16.6501C25.4697 16.4014 25.2682 16.2 25.0196 16.2H22.3197V13.5H25.8899C26.3114 13.5023 26.7106 13.3123 26.9747 12.984C27.2287 12.6705 27.3257 12.2583 27.2384 11.8644L24.8486 1.06438ZM3.86963 15.3C3.86777 16.8651 2.71854 18.1923 1.16967 18.4179V3.1822C2.71854 3.40776 3.86777 4.73477 3.86963 6.30012V15.3ZM4.76961 13.4232V8.17692C5.3087 8.36829 5.66898 8.87813 5.6696 9.44996V12.1499C5.66898 12.722 5.3087 13.2316 4.76961 13.4232ZM16.0197 26.1H13.3196C10.5871 26.0969 8.37285 23.8825 8.36976 21.15V13.9501C8.36832 12.8814 7.61645 11.9606 6.56959 11.7456V9.92663C8.61799 10.1578 10.1669 11.8887 10.1697 13.9501V21.15C10.1718 22.8888 11.5808 24.298 13.3196 24.3H16.0197C17.5845 24.2972 18.9105 23.1469 19.134 21.5982C19.1461 21.5982 19.1576 21.6001 19.1696 21.6001H20.9469C20.7121 24.1468 18.5774 26.0965 16.0197 26.1ZM20.9698 20.7001H19.1696C17.1824 20.6976 15.5719 19.0874 15.5697 17.0999H24.5697C24.5675 19.0874 22.957 20.6976 20.9698 20.7001ZM21.4197 16.2H18.7197V13.5H21.4197V16.2ZM26.2731 12.4208C26.1794 12.5355 26.0382 12.6017 25.8899 12.6H15.6961L17.8061 4.15902C17.8605 3.92027 17.714 3.68194 17.4763 3.62261C17.2388 3.56328 16.9974 3.7048 16.9331 3.94108L14.7683 12.6H14.2494C14.1011 12.6017 13.96 12.5355 13.8663 12.4208C13.7833 12.3197 13.7516 12.1862 13.78 12.0587L16.1697 1.25863C16.2239 1.0446 16.4183 0.895873 16.6392 0.899993H23.5002C23.721 0.895873 23.9155 1.0446 23.9697 1.25863L26.3594 12.0587C26.3878 12.1862 26.3561 12.3197 26.2731 12.4208Z" fill="#1C0F09"/>
    </svg>

    ,
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9573 9H1.95728C1.0269 9 0.269775 8.24288 0.269775 7.3125V1.6875C0.269775 0.757125 1.0269 0 1.95728 0H10.9573C11.8877 0 12.6448 0.757125 12.6448 1.6875V7.3125C12.6448 8.24288 11.8877 9 10.9573 9ZM1.95728 1.125C1.6479 1.125 1.39478 1.377 1.39478 1.6875V7.3125C1.39478 7.623 1.6479 7.875 1.95728 7.875H10.9573C11.2667 7.875 11.5198 7.623 11.5198 7.3125V1.6875C11.5198 1.377 11.2667 1.125 10.9573 1.125H1.95728Z" fill="#1C0F09"/>
            <path d="M10.9573 27H1.95728C1.0269 27 0.269775 26.2429 0.269775 25.3125V12.9375C0.269775 12.0071 1.0269 11.25 1.95728 11.25H10.9573C11.8877 11.25 12.6448 12.0071 12.6448 12.9375V25.3125C12.6448 26.2429 11.8877 27 10.9573 27ZM1.95728 12.375C1.6479 12.375 1.39478 12.627 1.39478 12.9375V25.3125C1.39478 25.623 1.6479 25.875 1.95728 25.875H10.9573C11.2667 25.875 11.5198 25.623 11.5198 25.3125V12.9375C11.5198 12.627 11.2667 12.375 10.9573 12.375H1.95728Z" fill="#1C0F09"/>
            <path d="M25.5823 27H16.5823C15.6519 27 14.8948 26.2429 14.8948 25.3125V19.6875C14.8948 18.7571 15.6519 18 16.5823 18H25.5823C26.5127 18 27.2698 18.7571 27.2698 19.6875V25.3125C27.2698 26.2429 26.5127 27 25.5823 27ZM16.5823 19.125C16.2729 19.125 16.0198 19.377 16.0198 19.6875V25.3125C16.0198 25.623 16.2729 25.875 16.5823 25.875H25.5823C25.8917 25.875 26.1448 25.623 26.1448 25.3125V19.6875C26.1448 19.377 25.8917 19.125 25.5823 19.125H16.5823Z" fill="#1C0F09"/>
            <path d="M25.5823 15.75H16.5823C15.6519 15.75 14.8948 14.9929 14.8948 14.0625V1.6875C14.8948 0.757125 15.6519 0 16.5823 0H25.5823C26.5127 0 27.2698 0.757125 27.2698 1.6875V14.0625C27.2698 14.9929 26.5127 15.75 25.5823 15.75ZM16.5823 1.125C16.2729 1.125 16.0198 1.377 16.0198 1.6875V14.0625C16.0198 14.373 16.2729 14.625 16.5823 14.625H25.5823C25.8917 14.625 26.1448 14.373 26.1448 14.0625V1.6875C26.1448 1.377 25.8917 1.125 25.5823 1.125H16.5823Z" fill="#1C0F09"/>
        </svg>
]

export default icons