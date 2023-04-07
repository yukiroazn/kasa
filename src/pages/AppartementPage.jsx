import React from 'react'
import "./AppartementPage.css";
import { AppartementDescription } from '../components/AppartementDescription';
import { AppartementBanner  } from '../components/AppartementBanner';
import { AppartementHeader  } from '../components/AppartementHeader';

function AppartementPage() {
return (
<div className='appartementpage'>

<AppartementBanner />

<AppartementHeader />

<div className='appartementdescriptionflex'>
<AppartementDescription />
<AppartementDescription />
</div>

</div>

)
}

export default AppartementPage