import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-oferta',
  templateUrl: './detail-oferta.component.html',
  styleUrls: ['./detail-oferta.component.scss']
})
export class DetailOfertaComponent implements OnInit {

  constructor() { }

  faCv = faFile

  faContacto = faPhone

  oferta =
    {
      tittle:"Diseñador Gráfico",
      company:"Shopify",
      location:"Madrid,España",
      status:"Tiempo Completo",
      created:"4 de abril de 2021",
      image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcSFBYSFRUUGRgaGBkYHRgaFRgZHh0WGBUZGRkVFhYcIS4mHR4tIRkaJjgmKy8xNjU1HiY7QDszPy40NTEBDAwMEA8QHxISHzssJCsxNj80PT00NDc0MTY9NDQ0NDc0NDQ0NjQ0MTQ2MTQ0NDQ0NDQ0ND00NDQ0NDE0NDQxNP/AABEIAKkBKgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCAwUEAf/EAEQQAAIBAgIGBQcJBwMFAAAAAAECAAMRBBIFBiExQWEHIlFxgRM0c5GhsbIUJDIzYnKSs9EVI0JSgsHCVJPwF1NjotL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAArEQADAAIBAwQBAQkAAAAAAAAAAQIDERIEITETIkFRYYEUIzIzQnGRocH/2gAMAwEAAhEDEQA/AOUTPl4MT2jCLxeIgC8XiIAvF4iALxeIgC8XiIAvF4iALxeIgC8XiIAvF4iALxeIgC8XiIAvF4iALxeIgC8XiIAvF4iALxeIgC8XiIAvMpjMoBiYgxAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBMpjMoBiYgxAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBMpjMoBiYgzfgsM1WolIfSZlUcsxtc8hv8Ib0DXSpM5yorM38qqWPqG2ez9i4i1/k9f8A2n91pbuitF08Mgp01AHE8WPax4memrXRNjMq97Ae+Ya6t79qL1i+2UbVpMjFGVlYb1ZSpHHap2iYTta4MGxldlIIJSxBuPqk3ETizZD5SmUtaehERJHBERAEREAREQBERAEyRCdgBPcLzGTLo0+vq+jHxCQyXwl0SmeT0RddHViLijWIte4pva3aTbdPLLx0l9TU+4/wmUau6V4Mryb7ErnifYiJeViIiAIiIAiIgCIiAIiIBtp4Z3+ijt91Gb3CZYjCvTtnR0zXtnVkva17ZgL7x65cGrPmmG9DT+ASJ9J/0sN3VffTmWOodXx0W1j1O9kEiImoqEymMygHwzt6mC+Nofef2Unng0PSV8RRRgCrVUUg8VLAEGWzhdAYek61EoorrezC9xcEHj2EzP1GVSuP2izHLb2dWUlpxy+JrsxufKuLnsVyqjuAAHhLtnHqat4V2LtQQsxLE7dpJuTv7TMeHKobbL7ltdinIkgq6HOIx1XD0FCorsCbdVVWysbcdvDiTJ7o7VTDUVt5JXbi1QByT22OweAE2X1Eyl9sonG2VFEuLG6t4aqpBoUx9pFCMOYZbfpOXoTVClTWoldFqEVDkc3uaZRLXAOwg5hIrq51vR30XsrGJP8AXbQtChhw9Kkqt5RRcXvYhrjfykU0DoZ8ZUyL1VG12IuFU7tnEnbYcpbOWanl4RGoaejlxLa0fqfhaQF6YqNxap17/wBP0R6p0P2JhiLfJ6FuzyKfpKX1a+ETWFlKxJ1r1obD4ektSmmR2cKApIUixLEpu3DhbaROfqrqmcSorVSy0r9UD6T2O03P0VvsvvO3dvlqzy55PwQcPloisS5MNq5haYAXD0jzZQ5/E1zMq+r2GcWbD0e9UCnwZbEeuU/ti34J+i/spmTLo0+vq+j/AMxPPrZqr8lHlqRZqV7EHayEnZt4qTsvvGzfeejo0+vq+j/zEnkubxNojMuaSZP9JfU1PuN8JlGrul6Y5C1N1AuSjADmVIE4GhdT6NBR5RFqvYZmcZlv2Kh2Ac7XmbBlWNPZbkl01oquJc2I1ewzizYej3qgU+DLYj1yvtbNWThCKiFmpMbbd6NvCseIPA+B7Tqx9TNPXhlVY3K2RqJtw9BqjKiKWZjlVRxJ/wCb5Y+htR6NNQ1f96/EXIQHsCj6Xe3qEnkzTj8kZh14KziXUuhMMBYYehb0SfpOdpDU/DVQcqCm3BqfVt/T9E+qULq533RY8LKmidHTeiHwlQ0327Lq4Gx17R2HtHD1E69F6NfE1FpUx1jtJO5VG9mPZ+omrnPHlvsVae9HiiWrozUzD0QM6+Vbiz7R4JuA77nnOqdB4a1vk9C3Z5FP0mZ9XO+yLVhZSsS0dLak0Kqk0h5J+BW5UnsNM7APu2lbY7BtQqNSqLZ1NiOHJlPEEbby3HmnJ4IVDnyW/q15nhvQ0/gEifSfvw3dV99OSzVrzPDehp/AJE+k/fhu6r76cx4f53+S6/4CCRJVqTq+uJdq1Vb0l6oU7mcj3KDfvI7DJdpDQeCoU2qvRphVFzv8ANu8mwHfNVdRM1x1sqWNtbKnmUzxFQOzOEVASSEXco4KO7tmEvKzZh67U3WouxlYMptfrKbjZJjq3rRiK+KpUqjKUYtcBFG6mzDaOYEhBnc1M8+od7/lVJVliXLbXwycU01ot6Vhj9cMUlaqiuuVajqOov0VdgNvcJaEo/S3nFf01X8xpk6WZpvki7LTSWiwej6iWp1sS+16tViTbgNuzs6zPOxrLpP5Lh2qrYtsVQd2ZjYE8htNuU5/R95mv33+KaOkcfNU5Vlv3ZHHvIkWk8un9nU9RtfRCRrNis+f5Q999tmXuy2y+yWhq9pL5Vh6dYgBiCGA3BlJU25bLjkZTEtPo+HzMekf32l/VY5UppfJDFTb0a+kbzQelX4Wno1GwYp4RGt1qhNQnvNl/wDUD2zR0jeaD0q/C06uq5+Z4f0SfDM7f7lf3J/1/oePXDTZwlEFLeUclVvtCgC7PbjbYO8iV02sOJLZvlFW/wB6w/CNnsko6TlN8MeH70eJ8nb3GQOaunxy4T15KslPlo6mL0lWxr0adV8xDZFOUA3dlFzawJ2CXDh6KoioosqqFA7ABYD1SltD+cUPTUvzFl3SnqlrUrwTxd9srLXvStRsQ1BWdUQKCqkgMWUMS1t/0gLcp5tTdKVKeJppmco5yMpJI2g5WAO43tt7Lyx8RpjD02KVK9FWG9WqKpFwCLgm42EGYft/C/6nD/7yfrOLL7OPH4Dn3b2evG4YVab0zudSp8Ra8r7o1Fq9UHf5P/MSbft/C/6nD/7yfrIZ0dm+Jrn7B/MEjj2sdJ/g7WnSLDdwoJO4AnwEqTSWteIrOWSo6Jfqopy2XhmI2se28tXSIvSqD7DfCZRi7pZ0sS9to5mprWiy9RtYHxOejWbM6qGVrAFkvYhrbLgldvG/KSDTuDFfD1aR/iRrfeAup8CAZAejkfO29C/x05ZlXce4+6V5pU5PaSh8p7ledGuCDPVrkfRVUXva5Y99gB4mTnS2OGHo1KxF8ilrbrncq35mw8ZFejE/uKo+2p8Mg/Qzr67gnA1rdieyqpMZfdl0/tHJ7RtFeV9ZsU7ZjXdTe9l6qjkF3Ed95YOp2mji6JL2zo2ViBbMCLq9uF9o7wZU0n/RiOriD9pPc00dRjlRtLwV46fI6mv2BFTCF7damyuDyLBWHdY3/pE83RzgQlBq1utUci/2U2AevN7J2NbT8zr/AHCPEkATy6heY0u+p+a8zKn6WvyW6XP9D0a1aXOEoGooBcsEW+7M1zc9tgCbcpWy6y4oNn8u5N72Nivdltl9kmXSWPm9I/8AmH5dSVtNPTY5cbaK8tPloujQGkvlVCnWsASCGA3BlJVrcri45GRbpKwQy0sQBtzGm3MEF1v3ZW/FOp0feZrzd7fit7wZq6RT81XnVW34XMzwuOXS+yx942zs6teZ4b0NP4BI5r5gmxFbB0U3v5UX4AfuyWPIDbJHq15nhvQ0/gEyxOLppiKKMBndKoRj9k0yyeOw/wBMgm5ttfk60nOmb9HYJcPTWkgsqiw7TxJPMm5PfK+19035Wp8mQ9RD1iP4qm63cu7vv2CWLikZkdUbKxVgrWvlYggNbjY7ZSOLw7U3am4IZWKsDt2jjfjfffjeXdLKq3T8ohlelpGmZTGZT0DOYmdzUvz6h3v+VUnDM6OgceuGxFOuwZgha4W1zmRl2XIH8UhkTcNL6JT5RdUo/S3nFf01X8xpPf8AqFQ/7Nf1U/8A7lf46sKlWpUAIDu7gHeA7FgDz2zL02Opb5Isy0mlonHRtjxlqYcnaD5ReakBWt3ED8Ulml9HLiaL0XuAw3jeCDcMO4gSmsHinoutRGKupuD7wRxBGy0nuj9f6ZUCujK3FlAZTzsTcd23vkc+GufKTsWtaZyx0f189vKUcn83WvbtyZbX5ZvGT7RWAXDUkopeyC1zvJJuWPMkk+MjeN19oKp8mtR24XGUX5k7fUJy9Da7imKhrrUdnqF7oFyquRFCgMwsBl/4byNTmyL3I7LiX2Oz0jeaD0q/C0+dH2khUw/kSetSJFu1GJZW9pHgO2cDWnWuni6ApKlRTmVrsEtYBhbYx27ZGMDjXoOtSmxVxx7RxVhxB7JZOB1i0+z2cdpVtFuawaHXGUvJsSpBzKwF8rAEbuIsSCJCG1BxOawahbtzONn3ck6mj+kBSAK1Jg3bTsQeeViCO65nROvOFte9Q8sh/ubSufWx+1I6+Fd2yGaf1ffACk+cMWJNwpAVksyjadvE8N0tDRmNXEUkrKdjqD3Hip5g3HhK81q1qTF0xSSkwAYMHcgEEXGxVvvBI3zl6B1gq4MnLZkJuyNuJ7VP8Lc/WDsllYryQnXlHFUy+3glutmqb4ir8oolcxADKxtfKLBla2+1hY23b5Hl1KxZNsiDmai29lzJRhdfsOw66VUPHqhh4EG/sm99esKBsNRuQpkfFaRms0Ljr/R1qG97IppLU6ph6D13dCUynIgYixYAnMbbgb7p6ujT6+r6MfEJu0zrylWm9JKDEOrIWdgLBgQSFW99/aJxdU9Nrg6ju6swZcoCZb3zA3OYjslmslY6VLuQ9qpaLcMrvSWoNTOTQenkJuFcspUHgCqm4Hh/eb9J680qtGpTSnXVnRlVuoMrFSA1w9xY9ky0Tr6oULiFbMNmdACG5stxY91/CUxGaFuUWVU12Z2dVtXBglZmYPUewJAsABuAvt3naeOzZsnq1px4w+FqvezFSi83cEC3dtPcDOVidfcOo6q1WPAZQo8Sx/sZB9O6cqYxg72VVvlQblvvN+Lc/dEYbu+VHKuZnSOv0faSFKu1FjYVQAPvpew8QSO8CWPi8MtVGpuLqylSORFjYyjAbbZNNDa9vTUJXUuBszqQGt9pTsY87jxlmfBTrlJzHaS0zCvqBXDWSpSZb7GYurW5qFIv4+qTPV3Qy4Oj5MHMxOZmtbMxAGwcAAAAJzF16wtrk1RyKbfYbTnaR6QFsRQpMW/mewA55VJJ9YlbWbIuLRJcJ7o9PSHpIJRGHB69QgkdiKc1z3sFHPb2TzdHGkxlfCsesCXXmpADAdxF/wCrlILjMU1Z2qVGLMxuSfcBwHITHD1mR1dWKspuGG8GaF069Pj8/wDSr1PdsuXTejFxVFqLG19oYC5VhtDAce7iCZBl6P6+axqUQv8AMMxNu3JlG3lm8Z7NGdIAAC16ZJ/mS23mUYi3gfCdY69YW171e7Ib++3tmdLNj7JFrcV3Z3dGYFcPSWim5Ba53k7yx5kknxkF6R9JB3TDKb5Lu3JmFlHeFJP9QmeltfmYFcOhS+zO9iR91RcX5knukJdyxLMSSSSSTckk3JJ4mTwYK5c6I3a1xRcurPmeG9DT+ASKdJTlXwrKSGXyjAjeCDTII53n3ROu9GjQpUmp1iUREJASxKqASLtu2Ti63awJjTSKI65A982XbnyWtlJ/lM5jxUsu2u3c7VS50mT/AFa0wMXRV9zjquvY43kcjvHfynB6QNB51+VIOsgs4HFBubvXjy7pEtW9NHB1s9iyMMrqLXI3qRfZmB95HGTBtf6BBBo1yDsIIp8eB68PFcXyldjnKanVFcTKbcYyF3NIMEJuqta4B/hNid27fumqbigxMQYnQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCZTGZQDExBiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCZTGZQDExBiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCZTGZQDExNhiAa4myIBribIgGuJsiAa4myIBribIgGuJsiAa4myIBribIgGuJsiAa4myIBribIgGuJsiAa4myIBribIgGuJsiAa4myIBribIgGuZTKfYB/9k="
    }

  candidatos = [
    {
      logo:"A",
      name:"Andrey",
      surname:"Marin",
    },
    {
      logo:"D",
      name:"Daniel",
      surname:"Landete",
    }
  ]

  ngOnInit() {
  }

}
