import ErrorMessage from './ErrorMessage';


describe('components/commmon/ErrorMessage', function() {

  it('should show default message', function() {
    const cmp = shallow(<ErrorMessage />);
    expect(cmp.text()).toEqual('Error');
  });

  it('should show supplied error message', function() {
    const mockErr = new Error('mock error');
    const cmp = shallow(<ErrorMessage error={mockErr} />);
    expect(cmp.text()).toEqual('mock error');
  });

});