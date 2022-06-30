import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Checkbox, Form, Input } from 'antd';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Base, Section } from '../../assets/styles/styled-components';
import { SelectAmount } from "./styles";
import changeAmountInBasket from 'redux/actions/changeAmountInBasket';

export const BasketPage = () => {
    const dispatch = useDispatch()
    const { basket } = useSelector((state:any) => state); 
    const totalSum = basket.reduce((total:any, currentValue:any) => total = total + currentValue.price * currentValue.amount,0);
    
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Base>
            <Section>
                <article className='d-flex'>
                    <section className='w-50'>
                    <section>
                        <h2 className='text-start mb-4'>Make an Order</h2>
                    </section>
                    {
                        basket.map((item:any)=>{
                            const {product_code, name, amount, price} = item
                            return (
                                <section key={product_code} className='border-bottom mb-4 pb-3 d-flex justify-content-between'>
                                    <h5>{name}</h5>
                                    <SelectAmount className="border rounded">
                                        <button
                                            onClick={()=>{dispatch(changeAmountInBasket('DECREASE_AMOUNT_TO_ITEM_IN_BASKET', product_code))}} 
                                            type="button" 
                                            className="bg-transparent border-0 btn btn-link text-decoration-none"
                                        >-</button>
                                        <div className="ps-3 pe-3">
                                            <span>{amount}</span>
                                        </div>
                                        <button 
                                            onClick={()=>{dispatch(changeAmountInBasket('ADD_AMOUNT_TO_ITEM_IN_BASKET', product_code))}} 
                                            type="button" className="bg-transparent border-0 btn-link text-decoration-none"
                                        >+</button>
                                    </SelectAmount>
                                    <h4>$ {price * amount}</h4>
                                    <div className='d-flex justify-content-center'>
                                        <button 
                                            onClick={()=>{dispatch(changeAmountInBasket('DELETE_ITEM_FROM_BASKET', product_code))}} 
                                            type="button" 
                                            className="button btn-danger ms-2"
                                        >
                                            <FontAwesomeIcon icon={faTrashCan}/>
                                        </button>
                                    </div>
                                </section>
                            )
                        })
                    }
                    </section>
                    <article className='ms-4 w-50'>
                        <section>
                        <section>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                >
                                <Form.Item
                                    label="Full name"
                                    name="full name"
                                    rules={[{ required: true, message: 'Please input your full name!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                </Form>
                        </section>
                        </section>
                        <section className='mb-5'>
                            <h1 className='text-end'>Total: ${totalSum}</h1>
                        </section>
                        <section className='d-flex justify-content-end'>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                        >
                            Order
                        </button>
                    </section>
                    </article>
                </article>
            </Section>
        </Base>
    )
}