import "./page.modules.css";
import Image from "next/image";

const Loading = () => {
    return ( 
        // <div className="loading">
        //     <Image src="/Images/Loading.png" alt="" width={500} height={500} ></Image>
        // </div>
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2"></div>
        </div>
    );
}
 
export default Loading;