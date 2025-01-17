import { RotatingLines } from 'react-loader-spinner';
import '../../index.css';
import { Container, Loader } from './DiaryLoader.styled';

const MyLoader = () => (
  <Container>
    <Loader>
      <RotatingLines
        // strokeColor={`var(--white)`}
        strokeWidth="5"
        animationDuration="0.75"
        width="20%"
        visible={true}
      />
    </Loader>
  </Container>
);

export default MyLoader;
