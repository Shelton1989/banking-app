import React, { useEffect } from 'react'

// Redux
import {
    connect,
    useSelector
} from 'react-redux'

// Actions
import { fetchUser } from '../redux/actions/users'

// Types 
import {
    RootState
} from '../redux/types/stateTypes'
import {
    AddressObject
} from '../redux/types/userTypes'

// Ant components
import {
    Avatar, 
    Row, 
    Col, 
    Typography, 
    Divider
} from 'antd'

const mapActionsToProps = {
    fetchUser
}

const connector = connect(null, mapActionsToProps)

const {Text, Paragraph} = Typography

const UserDetails: React.FC<{fetchUser: any}>= ({fetchUser}) => {
    let id: Number = 1

    useEffect(() => {
        fetchUser(id)
    }, [id])

    const {
        username,
        name,
        email,
        address,
        phone,
        website,
        company
    } = useSelector((state: RootState) => state.user.user)
    
    return (
        <div className="site-layout-background">
            <Row justify="space-around" gutter={[20, 20]} >
                <Col >
                    <Avatar size={120} src="/avatar.jpg" />
                </Col>
            </Row>
            <Row gutter={[20, 5]}>
                <Col >
                    <Paragraph >
                        Hi, <Text type="warning" strong>{username}</Text>.
                        please see your user details below.
                    </Paragraph>
                </Col>
            </Row>
            <Divider orientation="left" >Profile</Divider>
            <Row gutter={[20, 5]} >
                <Col span={8} >
                    Username:
                </Col>
                <Col span={12} >
                    <Text type="warning" strong>{username}</Text>
                </Col>
            </Row>
            <Row gutter={[20, 5]} >
                <Col span={8} >
                    Name:
                </Col>
                <Col span={12} >
                    <Text type="warning" strong>{name}</Text>
                </Col>
            </Row>
            <Row gutter={[20, 5]} >
                <Col span={8} >
                    Email:
                </Col>
                <Col span={12} >
                    <Text type="warning" strong>{email}</Text>
                </Col>
            </Row>
            <Row gutter={[20, 5]} >
                <Col span={8} >
                    Phone:
                </Col>
                <Col span={12} >
                    <Text type="warning" strong>{phone}</Text>
                </Col>
            </Row>
            <Row gutter={[20, 5]} >
                <Col span={8} >
                    Website:
                </Col>
                <Col span={12} >
                    <Text type="warning" strong><a href={`http://${website}`} target="_blank">{website}</a></Text>
                </Col>
            </Row>
            <Divider orientation="left" >Address</Divider>
            <Row gutter={[20, 5]} >
                <Col span={8} >
                    Home:
                </Col>
                <Col span={12} >
                    <Text type="warning" strong>{address?.suite}, {address?.street}, {address?.city}, {address?.zipcode}</Text>
                </Col>
            </Row>
            <Divider orientation="left" >Company</Divider>
            <Row gutter={[20, 5]} >
                <Col span={8} >
                    Name:
                </Col>
                <Col span={12} >
                    <Text type="warning" strong>{company?.name}</Text>
                </Col>
            </Row>
        </div>
    )
}

export default connector(UserDetails)