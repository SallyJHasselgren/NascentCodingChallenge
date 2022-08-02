export default function UserForm() {
    return (
        <div className="App">
            <form>
                <p>
                    <label>
                        First Name:
                    </label>
                    <input type="text" name="firstName" />
                </p>
                <p>
                    <label>
                        Last Name:
                    </label>
                    <input type="text" name="lastName" />
                </p>
                <p>
                    <label>
                        Phone Number:
                    </label>
                    <input type="text" name="phoneNumber" />
                </p>
                <p>
                    <label>
                        Address:
                    </label>
                    <input type="text" name="address" />
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}