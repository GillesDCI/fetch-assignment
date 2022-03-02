# fetch-assignment

In this assignment we will make an api call using axios or fetch API 

## Task 1 Setting up
Open the terminal and do the following:
 - `npm i` to install the node modules. 


## Task 2 Look for an API you can use 
Look for an API you can use to make a fetch or axios call to this API. 

## Task 3 Set up `UseEffect` 
Set up `UseEffect` inside the HomePage. 
Example:

 ```javascript
    useEffect(() => {
        //let's make a call for a random image 

    },[])
 ```
## Task 4 Create a function to make the api call 
Create a function to make the api call to your chosen API endpoint.
You can use axios or fetch API. 

Example axios :
 ```javascript
    const loadData = async () => {
        const res = await axios.get('https://linktoapi.com/api)

        setState(res.data);
    }
 ```

## Task 5 Display the data you fetched 
Display the data you fetched making use of `useState`


