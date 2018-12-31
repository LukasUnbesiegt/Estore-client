import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';


import Faq from './FAQ/FAQ'
import SiteInfo from './SiteInfo/SiteInfo'
import Currency from './Currency/Currency'
import Delivery from './Delivery/Delivery'




class Settings extends Component {







    render() {


        const Lists = [

            {
                name: 'Currency',
                linkTo: '/admin/settings/'
            },
            {
                name: 'FAQs',
                linkTo: '/admin/settings/faq'
            },
            {
                name: 'Site Info',
                linkTo: '/admin/settings/siteinfo'
            },
            {
                name: 'Delivery',
                linkTo: '/admin/settings/delivery'
            }


        ]
        const renderListItems = () => {



            return Lists.map((list, i) => {
                return (

                    <ListGroupItem
                        tag="a"
                        href={list.linkTo}
                        action
                        key={i}
                    >
                        {list.name}
                    </ListGroupItem>
                )
            })


        }



        return (
            <Fragment>
                <div className="mt-3">
                    <div className="row">

                        <div className="col-md-2 col-lg-2">
                            <ListGroup>
                                {renderListItems()}
                            </ListGroup>


                        </div>

                        <div className="col-md-10 col-lg-10">

                            <Switch>
                                <Route exact path="/admin/settings/" component={Currency} />
                                <Route path="/admin/settings/faq" component={Faq} />
                                <Route path="/admin/settings/siteinfo" component={SiteInfo} />
                                <Route path="/admin/settings/delivery" component={Delivery} />
                            </Switch>

                        </div>

                    </div>

                </div>


            </Fragment>
        );
    }
}





export default Settings;