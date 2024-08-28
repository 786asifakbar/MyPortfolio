import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  return (
    <> 
    <div className="h-screen bg-gradient-to-l from-blue-900 to-gray-900 text-white p-10 md:flex md:items-center md:justify-between rounded-lg shadow-lg">
      <div className="md:flex md:items-center">
        <img
          src="../src/assets/about.png"
          alt="Profile"
          className="rounded-s-full w-96 h-96 mb-6 md:mb-0 md:mr-6"
        />
        <div>
          <h1 className="text-7xl font-bold">About Me</h1>
          <p className="text-md mt-5">
            I am a passionate Frontend Developer specializing in React.js. With several years of experience,
            I have honed my skills in building responsive, user-friendly web applications. My expertise lies
            in creating interactive interfaces, optimizing performance, and ensuring a seamless user experience.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><span className="font-semibold">Birthplace:</span> Sukkur , Sindh</p>
              <p><span className="font-semibold">Born:</span> 1993 </p>
            </div>
            <div>
              <p><span className="font-semibold">Residence:</span></p>
              <p><span className="font-semibold">Education:</span> BS(Hons) Information Technology </p>
            </div>
            <div>
              <p><span className="font-semibold">Skills:</span> React.js, JavaScript, HTML, CSS, Tailwind CSS</p>
            </div>
            <div>
              <p><span className="font-semibold">Experience:</span> 1 year in Frontend Development</p>
            </div>
            <div>
              <p><span className="font-semibold">Hobbies:</span> Coding, Traveling, Art</p>
            </div>
            <div>
              <p><span className="font-semibold">Email:</span>786asifakbar53@gmail.com </p>
            </div>
            <div className="mt-6 md:mt-0">
        <Button
          variant="contained"
          color="warning"
          startIcon={<DownloadIcon />}
          className="bg-blue-900 text-white font-semibold"
        >
          Download Resume
        </Button>
       </div>
       </div>
      </div>
      </div>
    </div>
  </>
  );
};

export default About;