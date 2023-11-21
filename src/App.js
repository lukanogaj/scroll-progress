import './App.css';
import Layout from './components/Layout';
import Card from './components/Card';
import ScrollIndicator from './components/ScrollIndicator';
function App() {
  return (
    <Layout>
      <>
        <ScrollIndicator />
        <Card />
      </>
    </Layout>
  );
}

export default App;
