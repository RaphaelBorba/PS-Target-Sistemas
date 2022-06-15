function quest2(n){
  let arr=[0,1]
  for(let i=1;i<n;i++){
    if(arr[i]==n){
      console.log('O número informado pertence a sequência!')
      break
    }else if(arr[i]>n){
      console.log('O número informado não pertence a sequência!')
      break
    }else if(arr[i]<n){
      arr.push(arr[i]+arr[i-1])
    }
  }
  console.log(arr)
}

function quest3(arr=[]){
  let menor = arr[0]
  let maior = 0
  let media_mes = 0
  let up_mid=0
  for(i in arr){
    media_mes+=arr[i]
    if(arr[i]<menor){
      menor = arr[i]
    }else if(arr[i]>maior){
      maior = arr[i]
    }
  }
  media_mes = media_mes/arr.length
  for(j in arr){
    if(arr[j]>media_mes){
      up_mid++
    }
  }
  console.log([menor,maior,media_mes,up_mid])
}
quest3([1,2,3,4,5,6,6,7,8,9,9,345,6,4,3,4,6,56,545,4,46,43,534,6,432])
