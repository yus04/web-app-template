from flask import Flask, request, jsonify  
  
app = Flask(__name__)  
  
# サンプルデータ  
users = []  
activities = []  
  
# Azure OpenAI Service  
@app.route('/openai.com/information', methods=['GET'])  
def get_openai_information():  
    system_prompt = request.args.get('system_prompt', '')  
    parameter = request.args.get('parameter', '')  
    message = request.args.get('message', '')  
    response = {  
        'system_prompt': system_prompt,  
        'parameter': parameter,  
        'message': message,  
        'info': 'This is a mock response from OpenAI service'  
    }  
    return jsonify(response)  
  
# Azure Cosmos DB  
@app.route('/cosmosdb/user', methods=['GET', 'POST', 'PUT', 'DELETE'])  
def cosmosdb_user():  
    if request.method == 'GET':  
        user_id = request.args.get('id', '')  
        user = next((user for user in users if user['id'] == user_id), None)  
        if user:  
            return jsonify(user)  
        else:  
            return jsonify({'error': 'User not found'}), 404  
  
    elif request.method == 'POST':  
        new_user = request.json  
        users.append(new_user)  
        return jsonify(new_user), 201  
  
    elif request.method == 'PUT':  
        updated_user = request.json  
        user_id = updated_user.get('id', '')  
        user = next((user for user in users if user['id'] == user_id), None)  
        if user:  
            user.update(updated_user)  
            return jsonify(user)  
        else:  
            return jsonify({'error': 'User not found'}), 404  
  
    elif request.method == 'DELETE':  
        user_id = request.args.get('id', '')  
        user = next((user for user in users if user['id'] == user_id), None)  
        if user:  
            users.remove(user)  
            return jsonify({'message': 'User deleted'})  
        else:  
            return jsonify({'error': 'User not found'}), 404  
  
# Azure Log Analytics  
@app.route('/loganalytics/activity', methods=['GET', 'POST'])  
def loganalytics_activity():  
    if request.method == 'GET':  
        return jsonify(activities)  
      
    elif request.method == 'POST':  
        new_activity = request.json  
        activities.append(new_activity)  
        return jsonify(new_activity), 201  
  
if __name__ == '__main__':  
    app.run(debug=True)  
