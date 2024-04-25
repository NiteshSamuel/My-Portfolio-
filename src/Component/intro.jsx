import altImg from '../assets/altprofile.jpg';

function Intro(){
    return <>
    <div clasName= "IntroDiv">
        <img src={altImg} class='h-20 w-20 rounded-full' />
        <div class='flex md:flex1 flex-col justify-center gap 4'> 
        <div class='text-sm font-bold flex justify-between items-center'>
            Nitesh Samuel
        </div>
        </div>
    </div>
    </>
}

export default Intro;