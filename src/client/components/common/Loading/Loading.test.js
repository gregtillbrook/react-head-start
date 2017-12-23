import Loading from './Loading';


describe('components/commmon/ErrorMessage', function() {

  it('should show content', function() {
    const cmp = shallow(<Loading />);
    expect(cmp.text()).toEqual('Loading...');
  });

});