/**{!! when(!str_contains($controller, '\\Closure'), PHP_EOL . " * @see {$controller}::" . ($isInvokable ? '__invoke' : $docblock_method ?? $method)) !!}
 * @see {!! $path !!}:{!! $line !!}
@foreach ($parameters as $parameter)
@if ($parameter->default !== null)
 * @param {!! $parameter->name !!} - Default: @js($parameter->default)

@endif
@endforeach
@if (isset($uris))
@foreach ($uris as $locale => $uri)
 * @route {!! $uri !!} ({!! $locale !!})
@endforeach
@else
 * @route {!! $uri !!}
@endif
 */
