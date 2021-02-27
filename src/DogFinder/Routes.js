import { Redirect, Route, Switch} from 'react-router-dom'
import Nav from './Nav'

import dogs from './DogsDatabase'
import DogList from './DogList'
import GetDog from './GetDog'
import Dog from './Dog'



const DogRoutes = () => {
    return (
        <>
            <Switch>
            <Route exact path="/">
            <Nav />
                <DogList dogs={dogs}/>
            </Route>
            <Route exact path="/dog/:name">
                <GetDog dogs={dogs}/>
            </Route>
            <Redirect to="/"/>
            </Switch>
        </>
    )
}


export default DogRoutes