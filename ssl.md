

CBT 스펙
- Client (React)
- Server (API) asp.net core/mssql/entity framework
  - Azure 호스팅
  - https://devncore.azurewebsites.net/swagger/index.html
    - 서버는 HTTPS로 보안이 강화되어있음..
    - 그래서 Client와 API 통신(GET, POST)을 하기 위해서는 Client도 HTTPS가 적용되어있어야함.

SSL == HTTPS


- Client는 기본 http를 제공한다. (React)
  - 리액트는 직접 https를 적용해야함..

- (참고로.. ASP.NET Blazor라면 기본적으로 https도 제공해줌)

- Azure는 자체적으로 HTTPS를 제공해줌..
(참고로 HTTPS는 돈주고 사야함!!)


근데 클라이언트 개발을 할때에는 돈주고 사기 좀 그러니까.. 가상의 HTTPS를 만들 수 있음..
<그걸할거임>

1. 먼저 검색

2. chocolatey(npm 같은거임) 설치 (윈도우) 
   - 맥이라면 또 다른 거 설치

3. 파워셸 PowerShell에서 설치
   - Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

4. > choco 명령어로 설치되었는지 확인.

5. mk > make, cert > certification 서명을 만들다..

6. install mkcert (우리 리액트 폴더가서)
