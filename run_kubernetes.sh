kubectl run capstone --image=dsirine/capstone --restart=Never --port=4000

kubectl get pods

kubectl port-forward app 1200:4000
