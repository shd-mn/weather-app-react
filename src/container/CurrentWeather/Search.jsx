import { Button, Form, Input } from '../../components';
function Search() {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.style.display = 'none';
    };

    return (
        <div className="change-location">
            <Form>
                <Button onClick={handleSubmit}>Change Location</Button>
                <Input
                    className="search"
                    type="search"
                    // onChange={(e) => onChangeHandle(e.target.value)}
                    placeholder="search a city"
                />
            </Form>
        </div>
    );
}

export default Search;
