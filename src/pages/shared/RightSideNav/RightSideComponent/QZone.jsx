
import qZone1 from "../../../../assets/qZone1.png"
import qZone2 from "../../../../assets/qZone2.png"
import qZone3 from "../../../../assets/qZone3.png"


const QZone = () => {
    return (
        <div>
            <h3 className='text-xl mt-7'>QZone</h3>
            <div className='mt-4 flex flex-col gap-y-5 '>
                <div className="hover:scale-102 duration-500">
                    <img src={qZone1} alt="" />
                </div>
                <div className="hover:scale-102 duration-500">
                    <img src={qZone2} alt="" />
                </div>
                <div className="hover:scale-102 duration-500">
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QZone;