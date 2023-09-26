const getDonated = () =>{
    const donated = localStorage.getItem('donation');
    if(donated){
        return JSON.parse(donated);
    }
    return[];
}

const saveDonated = id =>{
    const donateds = getDonated();
    const exists = donateds.find(jobId => jobId === id);
    if(!exists){
        donateds.push(id);
        localStorage.setItem('donation', JSON.stringify(donateds));
        return true;
    }
    return false;    
}
export {getDonated,saveDonated};