<?php

/**
 *  This file is part of noriods/auto-more.
 *
 *  Copyright (c) 2018 .
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace NorioDS\AutoMore;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listeners\AddClientAssets::class);
};
