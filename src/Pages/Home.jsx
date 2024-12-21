import CountdownDashboard from "../components/Dashboard/CountdownDashboard";
import "./Home.css"; // Style for home page
import useWindowDimensions from '../hooks/useWindowDimensions';
import Confetti from 'react-confetti'
const Home = () => {
  const { width, height } = useWindowDimensions(); // Get window width and height from the custom hook
  // const [isConfetti, setIsConfetti] = useState(true);
  return (
    <div className="home-page">
      <section className="intro">
      <Confetti
      width={width}
      height={height}
      numberOfPieces={500}
    />
        <h1>S & J</h1>
        <p>We`re getting married on Feb 24, 2025</p>
      </section>
      <CountdownDashboard />
    </div>
  );
};

export default Home;
