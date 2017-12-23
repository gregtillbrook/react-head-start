import cheerio from 'cheerio';
import renderPageRoute from './renderPageRoute';
import {Helmet} from 'react-helmet';

describe('server/routes/renderPageRoute', function() {

  beforeAll(() => {
    //to stop Helmet error where it thinks server calls are made during browser render
    Helmet.canUseDOM = false;
  });

  it('should render home page', async function() {
    const mockReq = {url: '/'}, mockRes = {send: jest.fn(), setHeader:jest.fn()};

    await renderPageRoute(mockReq, mockRes);

    const $ = getResponseAsDom(mockRes);
    expect($('h2').text()).toEqual('Home Page');
  });

  it('should render error page', async function() {
    const mockReq = {url: '/asdadasd'}, mockRes = {send: jest.fn(), setHeader:jest.fn()};

    await renderPageRoute(mockReq, mockRes);

    const $ = getResponseAsDom(mockRes);
    expect($('h2').text()).toEqual('Error: page not found');
  });

  //convert returned markup into a cheerio dom so we can easily inspect it
  function getResponseAsDom(res){
    expect(res.send.mock.calls).toHaveLength(1);
    const renderedHTML = res.send.mock.calls[0][0];
    return cheerio.load(renderedHTML);
  }
  
});