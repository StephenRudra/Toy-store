import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const toyTab = ()=>{
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Excavation toys")
  useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data => setToys(data))
    .catch(error => console.log(error))
    
  }, [])

  const handleClick = (tabName) =>{
    setActiveTab(tabName)
    console.log(activeTab)
  }
  const result = toys.filter((toy)=>toy.subCategory === activeTab);
  console.log(result)
  return(
    <div>
      <h2>toyz{toys.length}</h2>
      <Tabs className='mb-10'>
      <TabList>
        
        <Tab onClick={()=>handleClick("Excavation toys")}>Excavation toys
        </Tab>
        
        
        <Tab onClick={()=>handleClick("Lifting")}>Crane</Tab>

        
        
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
  