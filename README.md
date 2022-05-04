# Mimic token deploy

- Compile and Deploy Token to Kovan network
```
truffle compile && truffle migrate --reset --network=kovan 
```

- Verify Token Contracts
```
npx truffle run verify JUSD Mimic cJUSD --network=kovan  
```