/**
 * Created by raunak on 20/6/17.
 */
import React from 'react';
import {Link} from 'react-router-dom'


export default class FoodTypeListItem extends React.Component {

   render(){
       const type=this.props.type;
       return(<div>
           <div className="container-dishes">
               <div className="clearfix hidden-xs"  style={{width: 100, height: 50}}/>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                           <div className="panel panel-default">
                               <div className="panel-body">
                                   <img src="images/dishes1.jpg" className="img-responsive" />
                                   <h4 className="text-danger">{type}</h4>
                                   <ul >
                                       <li >
                                           <Link to={`/${type}/lunch`}>Lunch</Link>
                                       </li>
                                       <li>
                                           <Link to={`/${type}/dinner`}>Dinner</Link>
                                       </li>
                                       <li>
                                           <Link to={`/snacks`}>Snacks</Link>
                                       </li>

                                   </ul>

                               </div>
                           </div>
                       </div>

                   </div>
               </div>
               <div className="clearfix hidden-xs" style={{width: 100, height: 50}}/>
           </div>

                  </div>)
   }
}
