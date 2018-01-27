import Loading from './Loading';


describe('components/common/ErrorMessage', function() {

  it('should show content', function() {
    const cmp = shallow(<Loading />);
    expect(cmp.text()).toEqual('Loading...');
  });

});
