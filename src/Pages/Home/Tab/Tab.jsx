import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const toyTab = ()=>{
  const [toys, setToys] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data => setToys(data))
    .catch(error => console.log(error))
    
  }, [])
  return(
    <div>
      <h2>toyz{toys.length}</h2>
      <Tabs className='mb-10'>
      <TabList>
        <Tab>table 1 
          {
            toys.map(toy => <h2>{toy.subCategory}</h2>)
          }
        </Tab>
        <Tab>tabel 2</Tab>
      </TabList>
  
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default toyTab;







{/*
export default () => (
 
    <Tabs className='mb-10'>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
  
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
    
  );
*/}
  