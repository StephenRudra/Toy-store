import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const toyTab = ()=>{
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Excavation toys")
  useEffect(()=>{
    fetch(`https://toy-server-tawny.vercel.app/toys/${activeTab}`)
    .then(res => res.json())
    .then(data => setToys(data))
    .catch(error => console.log(error))
    
  }, [activeTab])

  const handleClick = (tabName) =>{
    setActiveTab(tabName)
    
  }
  
  return(
    <div>
      
      <Tabs className='mb-10'>
      <TabList>
        
        <Tab onClick={()=>handleClick("Excavation toys")}>Excavation toys
        </Tab>
        
        
        <Tab onClick={()=>handleClick("Lifting")}>Lifting</Tab>

        <Tab onClick={()=>handleClick("Set")}>Set</Tab>

        
        
      </TabList>
  
      <TabPanel>
        <h2> <div className='flex gap-4 mt-10 ml-10'>{toys.map(toy => <Card key={toy._id} toy={toy}></Card>)}</div></h2>
      </TabPanel>
      <TabPanel>
        <h2><div className='flex gap-4 mt-10 ml-10'>{toys.map(toy => <Card key={toy._id} toy={toy}></Card>)}</div></h2>
      </TabPanel>

      <TabPanel>
        <h2><div className='flex gap-4 mt-10 ml-10'>{toys.map(toy => <Card key={toy._id} toy={toy}></Card>)}</div></h2>
      </TabPanel>
      
    </Tabs>
    </div>
  );
};

export default toyTab;







