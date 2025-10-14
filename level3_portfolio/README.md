# 포트폴리오 제작 시 주의사항 & 팁
## 내비게이션
* 데스크탑 내비 이벤트는 mouseover, mouseout
* 태블릿 ~ 모바일 이벤트는 click
* 서브 메뉴 개수가 적을 경우(전체 내비 중 1~2개) 모바일에서 바로 펼쳐서 보이기(진로 글로벌 사이트 참고)
* 서브 메뉴 개수가 많을 경우 모바일에선 모두 숨기기
* 실제 내비게이션 HTML 태그는 데스크탑 버전만 작성하고 tablet, mobile의 메뉴는 JS 기능을 이용하여 복붙하기
## js 연결
* js 적용 내용 중 DOM 관련 내용이 있을 경우(querySelector, getElement, Swiper, ScrollTrigger 등 해당 대상이 없는 html에 js 파일을 연결하면 오류가 발생하니 주의!)
* index.html '#webProject' - index.js
* skill.thml '#list' - skill.js (cf. index.js 연결하면 error 발생)
## php include
* 모든 html, css, js 작성 완료 + link 연결 완료 기준
1. php 파일 만들기 `header.php`, `layout.php`, `footer.php`
2. php로 불러오고 싶은 HTML만 잘라서(ctrl+x) php에 붙여넣기
3. php 삽입 위치에 `<?php include "경로" ?>` 작성하기
4. filezila 웹호스팅 접속 후 (gitHub(x)) php, html등 프로젝트 폴더 업로드하고 결과 확인하기
* 프로젝트 별로 깃허브 저장소 만들기