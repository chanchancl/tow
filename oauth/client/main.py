
import requests
import time

prefix = "http://localhost:3000/"

target = prefix
print(f"Send request to {target}")
rsp = requests.get(target)
print(rsp.status_code, rsp.text)


target = prefix + "login"
print(f"Login without data to {target}")
start = time.time()
rsp = requests.post(target)
print(time.time() - start)
print(rsp.status_code, rsp.text)

target = prefix + "login"
data = {
    'user': 'john',
    'pass': 'doe',
}
print(f"Login with form-data to {target}")
rsp = requests.post(target, data)
print(rsp.status_code, rsp.text)
token = rsp.json()['token']

target = prefix + "restricted"
print(f"Login without token to {target}")
rsp = requests.get(target)
print(rsp.status_code, rsp.text)

target = prefix + "restricted"
header = {
    'Authorization': f"Bearer {token}"
}
print(f"Login with token in header to {target}")
rsp = requests.get(target, headers=header)
print(rsp.status_code, rsp.text)
