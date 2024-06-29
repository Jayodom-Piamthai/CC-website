function applyTest() {
    return (
        <>
            <div>
                <form  method="get">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"/>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"/>
                    <input type="submit" value="Submit"> </input>
                </form>
            </div>
        </>
    )
}
export default applyTest;