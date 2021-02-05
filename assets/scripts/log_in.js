export default function Login(){
  return {
    render: function(){
      return `<form>
      <label>Username</label>
      <input type="text" name="username" placeholder="username">
      <label>Password</label>
      <input type="text" name="password" placeholder="*********">
      </form>`;
    }
  }
}